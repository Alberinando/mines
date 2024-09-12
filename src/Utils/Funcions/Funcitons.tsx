import PropsSpread from '../Interfaces/SpreadMinesProps';

const createBoard = (rows: number, columns: number) => {
  return Array(rows)
    .fill(0)
    .map((_, row) => {
      return Array(columns)
        .fill(0)
        .map((__, column) => {
          return {
            row,
            column,
            opened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearMines: 0,
          };
        });
    });
};

const spreadMines = (board: PropsSpread[][], minesAmount: number) => {
  const rows = board.length;
  const columns = board[0].length;
  let minesPlanted = 0;
  while (minesPlanted < minesAmount) {
    const rowSel = parseInt((Math.random() * rows).toFixed(), 10);
    const columnSel = parseInt((Math.random() * columns).toFixed(), 10);

    if (
      board[rowSel] &&
      board[rowSel][columnSel] &&
      !board[rowSel][columnSel].mined
    ) {
      board[rowSel][columnSel].mined = true;
      minesPlanted++;
    }
  }
};

const createMinedBoard = (
  rows: number,
  columns: number,
  minesAmount: number,
) => {
  const board = createBoard(rows, columns);
  spreadMines(board, minesAmount);
  return board;
};

const cloneBoard = (board: PropsSpread[][]) => {
  return board.map((rows: PropsSpread[]) => {
    return rows.map((field: PropsSpread) => {
      return {...field};
    });
  });
};

const getNeighbors = (
  board: PropsSpread[][],
  row: number,
  column: number,
): PropsSpread[] => {
  const neighbors: PropsSpread[] = [];
  const rows = [row - 1, row, row + 1];
  const columns = [column - 1, column, column + 1];
  rows.forEach(r => {
    columns.forEach(c => {
      const diferent = r !== row || c !== column;
      const validRow = r >= 0 && r < board.length;
      const validColumn = c >= 0 && c < board[0].length;
      if (diferent && validRow && validColumn) {
        neighbors.push(board[r][c]);
      }
    });
  });
  return neighbors;
};

const safeNeighborhood = (
  board: PropsSpread[][],
  row: number,
  column: number,
): boolean => {
  const safes = (result: boolean, neighbor: PropsSpread) =>
    result && !neighbor.mined;
  return getNeighbors(board, row, column).reduce(safes, true);
};

const openField = (board: PropsSpread[][], row: number, column: number) => {
  const field = board[row][column];
  if (!field.opened) {
    field.opened = true;
    if (field.mined) {
      field.exploded = true;
    } else if (safeNeighborhood(board, row, column)) {
      getNeighbors(board, row, column).forEach(n =>
        openField(board, n.row, n.column),
      );
    } else {
      const neighboard = getNeighbors(board, row, column);
      field.nearMines = neighboard.filter(n => n.mined).length;
    }
  }
};

const fields = (board: PropsSpread[][]): PropsSpread[] => {
  return ([] as PropsSpread[]).concat(...board);
};

const hadExplodsion = (board: PropsSpread[][]) =>
  fields(board).filter(field => field.exploded).length > 0;

const pendding = (field: PropsSpread) =>
  (field.mined && !field.flagged) || (!field.mined && !field.opened);

const wonGame = (board: PropsSpread[][]) =>
  fields(board).filter(pendding).length === 0;

const showMines = (board: PropsSpread[][]) =>
  fields(board)
    .filter(field => field.mined)
    .forEach(field => (field.opened = true));

const invertFlag = (board: PropsSpread[][], row: number, column: number) => {
  const field = board[row][column];
  field.flagged = !field.flagged;
};

const flagsUsed = (board: PropsSpread[][]) => {
  return fields(board).filter(field => field.flagged).length;
};

export {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplodsion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
  createBoard,
  spreadMines,
  getNeighbors,
  safeNeighborhood,
};
