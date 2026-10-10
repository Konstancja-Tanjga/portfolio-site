import { useId, useState } from "react";

import type { UseCase as UseCaseData } from "../content/types";
import { Lane } from "./Wall";

/**
 * The use-case template. Actor, trigger, precondition, flow, exits,
 * postcondition, why this shape, the rule it sets.
 *
 * The template is the point: every use case on every wall fills the
 * same slots, so a reader who has read one can skim the rest and
 * still land on the reasoning.
 */
/**
 * On the surface: who, what sets it off, the rule it sets, and how it
 * ends. The precondition, the main flow, the postcondition and the
 * reasoning sit behind one "Show more", so the use case reads in ten
 * seconds and can still be checked step by step.
 */
export function UseCase({ uc }: { uc: UseCaseData }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <Lane width="wall">
      <article className={open ? "uc is-open" : "uc"}>
        <header className="uc__head">
          <span className="uc__id">{uc.id}</span>
          <h3 className="uc__title">{uc.title}</h3>
        </header>

        <Slot label="Actor" note={uc.actor.note}>
          <p className="uc__actor">{uc.actor.name}</p>
          <p>{uc.actor.body}</p>
        </Slot>

        <Slot label="Trigger" note={uc.trigger.note}>
          <p>{uc.trigger.body}</p>
        </Slot>

        <Slot label="Rule it sets" note={uc.ruleNote} strong>
          <p>{uc.rule}</p>
        </Slot>

        <div className="uc__more" id={`${id}-more`} hidden={!open}>
        <Slot label="Precondition" note={uc.precondition.note}>
          <p>{uc.precondition.body}</p>
        </Slot>

        {uc.flow.length > 0 && (
        <Slot label="Main flow">
          <ol className="uc__flow">
            {uc.flow.map((f) => (
              <li key={f.n}>
                <span className="uc__step-n">{f.n}</span>
                <div>
                  <p>{f.text}</p>
                  {f.note && <p className="uc__note">{f.note}</p>}
                </div>
              </li>
            ))}
          </ol>
        </Slot>
        )}

        {uc.exits?.length ? (
          <Slot
            label={`Exits: ${uc.exits.length === 2 ? "two" : uc.exits.length}, no third`}
            note={uc.exitsNote}
          >
            <div className="uc__exits">
              {uc.exits.map((e) => (
                <div className="uc__exit" key={e.label}>
                  <p className="field__label">{e.label}</p>
                  <p>{e.text}</p>
                </div>
              ))}
            </div>
          </Slot>
        ) : null}

        <Slot label="Postcondition" note={uc.postcondition.note}>
          <p>{uc.postcondition.body}</p>
        </Slot>

        <Slot label="Why this shape">
          <p>{uc.why}</p>
        </Slot>
        </div>

        <button
          type="button"
          className="uc__toggle"
          aria-expanded={open}
          aria-controls={`${id}-more`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Show less" : "Show more: the flow, step by step"}
        </button>
      </article>
    </Lane>
  );
}

function Slot({
  label,
  note,
  strong,
  children,
}: {
  label: string;
  note?: string;
  strong?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section className={strong ? "uc__slot uc__slot--strong" : "uc__slot"}>
      <p className="field__label">{label}</p>
      <div className="uc__body">{children}</div>
      {note && <p className="uc__note uc__note--aside">{note}</p>}
    </section>
  );
}
