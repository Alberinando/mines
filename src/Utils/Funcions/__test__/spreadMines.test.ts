import {createBoard, spreadMines} from '../Funcitons';

describe('spreadMines', () => {
  it('spreads the correct amount of mines', () => {
    const rows = 5;
    const columns = 5;
    const minesAmount = 5;
    const board = createBoard(rows, columns);
    spreadMines(board, minesAmount);

    // Verifica se o número correto de minas foi plantado
    let minesPlanted = 0;
    board.forEach(row => {
      row.forEach(cell => {
        if (cell.mined) {
          minesPlanted++;
        }
      });
    });
    expect(minesPlanted).toBe(minesAmount);

    // Verifica se as minas foram plantadas em células diferentes
    const minedCells = new Set();
    board.forEach(row => {
      row.forEach(cell => {
        if (cell.mined) {
          minedCells.add(`${cell.row},${cell.column}`);
        }
      });
    });
    expect(minedCells.size).toBe(minesAmount);
  });
});
