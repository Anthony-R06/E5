import type { Direction, Position } from "../core/mod.ts";
import type { Controller } from "./controllers.ts";

function tileDirection(
  player: Position,
  tile: Position,
): Direction | undefined {
  const dx = tile.x - player.x;
  const dy = tile.y - player.y;

  if (dx === 1 && dy === 0) {
    return "right";
  } else if (dx === -1 && dy === 0) {
    return "left";
  } else if (dx === 0 && dy === 1) {
    return "down";
  } else if (dx === 0 && dy === -1) {
    return "up";
  } else {
    return undefined;
  }
}

export const clickToMove: Controller = {
  label: "Click a neighboring tile",
  attach(session, board) {
    const stop = board.onTileClick((tile) => {
      const player = session.getState().puzzle.player;
      const direction = tileDirection(player, tile);
      if (direction !== undefined) {
        session.dispatch({ kind: "move", direction });
      }
    });
    return stop;
  },
};
