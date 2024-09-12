export interface createBoardProps {
  rows: number;
  columns: number;
  opened: boolean;
  flagged: boolean;
  mined: boolean;
  exploded: boolean;
  nearMines: number;
}
