import { hasCrate, type Puzzle } from "../core/mod.ts";

export function GoalTracker({ puzzle }: { puzzle: Puzzle }) {
  const completed =
    puzzle.layout.goals.filter((goal) => hasCrate(puzzle, goal)).length;
  return (
    <dl className="status">
      <dt>Goals filled</dt>
      <dd>{completed} of {puzzle.layout.goals.length}</dd>
    </dl>
  );
}
