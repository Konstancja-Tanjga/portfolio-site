/**
 * Which process stages the reader is pointing at.
 *
 * The board and the rules that govern it are two blocks in the same chapter,
 * rendered by two components that know nothing about each other — the block
 * map in Chapter.tsx is deliberately a flat switch, and threading a provider
 * through it for one chapter would make every other wall pay for this one.
 *
 * So the coupling is a subscription rather than a prop: the rules announce
 * what they govern, the board listens. Nothing else in the site subscribes,
 * and if the board is not on the page the announcement falls on the floor,
 * which is the correct behaviour rather than a bug to guard against.
 */
type Listener = (stages: readonly string[]) => void;

const listeners = new Set<Listener>();
let focused: readonly string[] = [];

export function focusStages(stages: readonly string[]): void {
  focused = stages;
  for (const listener of listeners) listener(stages);
}

export function subscribeToStages(listener: Listener): () => void {
  listeners.add(listener);
  listener(focused);
  return () => {
    listeners.delete(listener);
  };
}
