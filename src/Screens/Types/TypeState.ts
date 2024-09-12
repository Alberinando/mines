type Board = Array<
  Array<{
    row: number;
    column: number;
    opened: boolean;
    flagged: boolean;
    mined: boolean;
    exploded: boolean;
    nearMines: number;
  }>
>;

type State = {
  board: Board;
  won: boolean;
  lost?: boolean;
};

export default State;
