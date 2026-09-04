import type { Portrait as PortraitData } from "../content/types";
import { asset } from "./asset";
import { Lane } from "./Wall";

/**
 * The opening of the About wall: a photograph beside the claim.
 *
 * Every other wall opens on the yellow Cover field, which is right for a
 * project and wrong for a person — a case study is about a product, this
 * page is about who built it. The photograph carries that, so it is the
 * one place on the site where a face outranks a typeset frame.
 *
 * The facts sit under the lead rather than in a MetaStrip because they
 * are about a person, not a project: location, availability, languages.
 */
export function Portrait({ portrait }: { portrait: PortraitData }) {
  const { shot, kicker, claim, lead, facts } = portrait;
  return (
    <Lane width="wall" className="portrait">
      <figure className="portrait__frame">
        {shot.src ? (
          <img
            className="portrait__img"
            src={asset(shot.src)}
            alt={shot.caption ?? ""}
            /* The first image on the page and the one the layout is sized
               around — lazy-loading it only buys a reflow. */
            decoding="async"
          />
        ) : (
          <div className="portrait__slot">
            <span>{shot.slot ?? "portrait"}</span>
          </div>
        )}
      </figure>

      <div className="portrait__text">
        {kicker && <p className="kicker">{kicker}</p>}
        <h1 className="portrait__claim">{claim}</h1>
        <p className="portrait__lead">{lead}</p>
        {facts && facts.length > 0 && (
          <dl className="portrait__facts">
            {facts.map((f) => (
              <div className="portrait__fact" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </Lane>
  );
}
