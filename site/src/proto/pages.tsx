import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Button, Card, Composer, Dialog, Select, SidePanel, Tab, TabList, TabPanel, Tabs, Toolbar, useToast } from "@bighatpoland/ui";

import { Chart, Pivot, type ChartKind } from "./Chart";
import { DASHBOARDS, QUERIES } from "./data";
import { I } from "./icons";

/* ---------------- Home ---------------- */
export function Home() {
  const nav = useNavigate();
  return (
    <div className="p-page">
      <Card elevation="raised">
        <div className="p-ask">
          <div>
            <h2 className="p-h2">Ask AI Data Analyst</h2>
            <p className="p-muted">Plan, query and brief in natural language.</p>
          </div>
          <div className="p-chips">
            {["Why did EMEA jump in week 9?", "Monthly active users, last year", "Top regions this quarter"].map((q) => (
              <button key={q} type="button" className="p-chip bh-focusable" onClick={() => nav("/prototype/analytics/analyst")}>{q}</button>
            ))}
          </div>
        </div>
      </Card>
      <h2 className="p-h2">Favourite dashboards</h2>
      <div className="p-grid">
        {DASHBOARDS.map((d) => (
          <Card key={d.id} onClick={() => nav("/prototype/analytics/analysis")} ariaLabel={`Open ${d.name}`}>
            <div className="p-card">
              <Chart kind={d.id === "d2" ? "line" : d.id === "d3" ? "area" : "bar"} grouping="year" height={120} />
              <strong>{d.name}</strong>
              <span className="p-muted">{d.domain}</span>
              <span className="p-badges">{d.roles.map((r) => <Badge key={r} tone="info">{r}</Badge>)}</span>
              <span className="p-muted p-small">{d.date}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

/* ---------------- Analysis: graph, pivot, table, side sheet, enlarge ---------------- */
export function Analysis() {
  const [view, setView] = useState("graph");
  const [sheet, setSheet] = useState(false);
  const [kind, setKind] = useState<ChartKind>("bar");
  const [grouping, setGrouping] = useState<"category" | "year">("category");
  const [big, setBig] = useState(false);
  const { notify } = useToast();
  return (
    <div className={big ? "p-page p-page--enlarged" : "p-page"}>
      <Tabs value={view} onChange={setView}>
        <div className="p-viewbar">
          <TabList ariaLabel="View">
            <Tab id="graph">Graph</Tab>
            <Tab id="pivot">Pivot</Tab>
            <Tab id="table">Table</Tab>
          </TabList>
          <Toolbar ariaLabel="View actions" flush>
            <Button size="sm" variant={sheet ? "secondary" : "ghost"} iconStart={I.sliders} onClick={() => setSheet((v) => !v)} aria-pressed={sheet} data-test="configure">
              Configure
            </Button>
            <Button size="sm" variant="ghost" iconStart={big ? I.shrink : I.expand} onClick={() => { setBig((v) => !v); notify({ tone: "info", title: big ? "Workspace restored" : "Workspace enlarged", duration: 1600 }); }} data-test="enlarge">
              {big ? "Restore" : "Enlarge"}
            </Button>
          </Toolbar>
        </div>
        <div className={sheet ? "p-work p-work--sheet" : "p-work"}>
          <div className="p-body">
            <TabPanel id="graph"><Chart kind={kind} grouping={grouping} height={big ? 460 : 340} /></TabPanel>
            <TabPanel id="pivot"><Pivot /></TabPanel>
            <TabPanel id="table"><Pivot /></TabPanel>
          </div>
          {sheet && (
            <SidePanel side="end" ariaLabel="Chart configuration" title="Chart configuration" width={300}>
              <div className="p-form" data-test="sheet">
                <Select label="Chart type" value={kind} onChange={(e) => setKind(e.target.value as ChartKind)} options={[{ value: "bar", label: "Bar" }, { value: "line", label: "Line" }, { value: "area", label: "Area" }]} />
                <Select label="Grouping" value={grouping} onChange={(e) => setGrouping(e.target.value as "category" | "year")} options={[{ value: "category", label: "By category, two years" }, { value: "year", label: "Average of both years" }]} />
                <Select label="Time unit" defaultValue="quarter" options={[{ value: "quarter", label: "Quarter" }, { value: "month", label: "Month" }]} />
                <div className="p-row">
                  <Button variant="ghost" size="sm" onClick={() => setSheet(false)}>Close</Button>
                  <Button size="sm" onClick={() => { setSheet(false); notify({ tone: "success", title: "Saved", duration: 1400 }); }}>Save</Button>
                </div>
              </div>
            </SidePanel>
          )}
        </div>
      </Tabs>
    </div>
  );
}

/* ---------------- AI Data Analyst: a branch with two exits ---------------- */
type Step = { id: number; text: string; reason?: string };
export function Analyst() {
  const [steps, setSteps] = useState<Step[]>([
    { id: 1, text: "Show total revenue for 2024 and 2025 by product category." },
  ]);
  const [thread, setThread] = useState<null | { fragment: string; asked?: string; answered?: boolean }>(null);
  const [draft, setDraft] = useState("");
  const { notify } = useToast();
  const fragment = "revenue for 2024 and 2025";

  const ask = (q: string) => {
    if (!thread) return;
    setThread({ ...thread, asked: q });
    setTimeout(() => setThread((t) => (t ? { ...t, answered: true } : t)), 900);
  };
  const apply = () => {
    setSteps((s) => [...s, { id: s.length + 1, text: "Compare January to November of both years.", reason: "2025 is loaded to 30 November; a full-year comparison is not like-for-like." }]);
    setThread(null);
    notify({ tone: "success", title: "Applied to the main analysis", duration: 1800 });
  };

  return (
    <div className="p-page p-analyst">
      <div className="p-thread" data-test="main-thread">
        {steps.map((s) => (
          <div className="p-step" key={s.id}>
            <span className="p-step__n">{String(s.id).padStart(2, "0")}</span>
            <div>
              <p className="p-step__q">{s.text}</p>
              {s.reason && <p className="p-step__reason">Reason: {s.reason}</p>}
            </div>
          </div>
        ))}
        <div className="p-answer">
          <p>
            This analysis shows the total{" "}
            <button type="button" className={thread ? "p-frag is-on bh-focusable" : "p-frag bh-focusable"} onClick={() => setThread({ fragment })} data-test="fragment">
              {fragment}
            </button>
            , grouped by product category. 2025 comes out 4 percent lower.
          </p>
          <Chart kind="bar" grouping="category" height={260} />
          <div className="p-badges p-muted p-small">
            <span>Measure: revenue</span><span>Group by: product category</span><span>Filter: booking date 2024 to 2025</span>
          </div>
        </div>
        <Composer label="Ask the analyst" placeholder="Ask a follow-up" value={draft} onValueChange={setDraft} onSubmit={() => setDraft("")} submitLabel="Send" />
      </div>
      {thread && (
        <SidePanel side="end" ariaLabel="Detail thread" title="Detail thread" width={360}>
          <div className="p-detail" data-test="detail-thread">
            <p className="p-muted p-small">Discussing one fragment. The main analysis stays untouched.</p>
            <blockquote className="p-quote">“{thread.fragment}”</blockquote>
            <div className="p-badges"><Badge>revenue</Badge><Badge>product category</Badge><Badge>2024 to 2025</Badge></div>
            {!thread.asked ? (
              <div className="p-suggest">
                <Button size="sm" variant="secondary" onClick={() => ask("Why is 2025 lower than 2024 here?")} data-test="ask-why">Why is 2025 lower than 2024 here?</Button>
              </div>
            ) : (
              <>
                <p className="p-you">{thread.asked}</p>
                {thread.answered ? (
                  <>
                    <p>Because 2025 is not a full year in this dataset. Bookings are loaded up to 30 November, while 2024 covers twelve months, so the comparison is not like-for-like.</p>
                    <Card elevation="flat">
                      <div className="p-evidence" data-test="evidence">
                        <strong>Same period, January to November</strong>
                        <div className="p-evidence__row"><span>2024</span><span>18.4 M€</span></div>
                        <div className="p-evidence__row"><span>2025</span><span>19.2 M€ <em className="is-up">+4.1%</em></span></div>
                        <div className="p-row"><Button size="sm" variant="ghost">Show SQL</Button><Button size="sm" variant="ghost">Open as pivot</Button></div>
                      </div>
                    </Card>
                    <div className="p-exits">
                      <Button variant="ghost" onClick={() => setThread(null)} data-test="discard">Discard</Button>
                      <Button onClick={apply} data-test="apply">Apply to main analysis</Button>
                    </div>
                  </>
                ) : (
                  <p className="p-muted">Thinking…</p>
                )}
              </>
            )}
          </div>
        </SidePanel>
      )}
    </div>
  );
}

/* ---------------- Queries: the shelf, and one query with its governance ---------------- */
export function Queries() {
  const [open, setOpen] = useState<string | null>(null);
  const [dialog, setDialog] = useState(false);
  const q = QUERIES.find((x) => x.id === open);
  return (
    <div className="p-page">
      <Toolbar ariaLabel="Queries" end={<Button size="sm" onClick={() => setDialog(true)}>New query</Button>}>
        <span className="p-muted">{QUERIES.length} saved</span>
      </Toolbar>
      <div className={q ? "p-work p-work--sheet" : "p-work"}>
        <div className="p-grid">
          {QUERIES.map((x) => (
            <Card key={x.id} onClick={() => setOpen(x.id)} ariaLabel={`Open ${x.name}`} accent={x.id === open ? "info" : "none"}>
              <div className="p-card">
                <strong>{x.name}</strong>
                <span className="p-muted p-small">{x.source} · {x.fields} fields</span>
                <span className="p-badges">{x.roles.map((r) => <Badge key={r} tone="info">{r}</Badge>)}</span>
                <span className="p-muted p-small">{x.author} · {x.date}</span>
              </div>
            </Card>
          ))}
        </div>
        {q && (
          <SidePanel side="end" ariaLabel="Query" title={q.name} width={380} onToggle={() => setOpen(null)}>
            <div className="p-form">
              <h3 className="p-h3">Governance</h3>
              <div className="p-badges">{q.roles.map((r) => <Badge key={r} tone="info">{r}</Badge>)}</div>
              <p className="p-muted p-small">Who can use it is part of the query, not a separate screen.</p>
              <h3 className="p-h3">SQL</h3>
              <pre className="p-sql">{q.sql}</pre>
              <Button size="sm" variant="secondary">Run query</Button>
            </div>
          </SidePanel>
        )}
      </div>
      <Dialog open={dialog} onClose={() => setDialog(false)} title="New query" footer={<><Button variant="ghost" onClick={() => setDialog(false)}>Cancel</Button><Button onClick={() => setDialog(false)}>Create</Button></>}>
        <div className="p-form">
          <Select label="Source" options={[{ value: "mssql", label: "mssql" }, { value: "oracle", label: "oracle" }, { value: "bigquery", label: "bigquery" }]} />
          <Select label="Eligible roles" options={[{ value: "all", label: "Administrator, Moderator, Users" }, { value: "admin", label: "Administrator" }]} />
        </div>
      </Dialog>
    </div>
  );
}

/* ---------------- Settings: a full overlay with the admin spine ---------------- */
export function Settings() {
  const items = ["Data sources", "Connections", "Column glossary", "Master data sources", "Users and permissions", "ERP links", "Version and updates"];
  const [cur, setCur] = useState(items[0]);
  return (
    <div className="p-page p-settings">
      <nav className="p-spine" aria-label="Settings">
        {items.map((it) => (
          <button key={it} type="button" className={it === cur ? "p-spine__item is-current bh-focusable" : "p-spine__item bh-focusable"} onClick={() => setCur(it)}>{it}</button>
        ))}
      </nav>
      <div>
        <h2 className="p-h2">{cur}</h2>
        <div className="p-form p-form--wide">
          <Select label="Server" options={[{ value: "a", label: "sql-prod-01" }, { value: "b", label: "sql-prod-02" }]} />
          <Select label="Authentication" options={[{ value: "w", label: "Windows" }, { value: "s", label: "SQL" }]} />
          <Button size="sm" variant="secondary">Test connection</Button>
        </div>
        <p className="p-muted p-small"><Link to="/prototype/analytics">Back to Home</Link></p>
      </div>
    </div>
  );
}
