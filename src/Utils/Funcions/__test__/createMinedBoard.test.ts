import {createMinedBoard} from '../Funcitons';

describe('createMinedBoard', () => {
  it('creates a mined board with the correct dimensions and mine count', () => {
    const rows = 5;
    const columns = 5;
    const minesAmount = 5;
    const board = createMinedBoard(rows, columns, minesAmount);

    // Verifica se o tabuleiro tem o número correto de linhas
    expect(board.length).toBe(rows);

    // Verifica se cada linha tem o número correto de colunas
    board.forEach(row => {
      expect(row.length).toBe(columns);
    });

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
  });
});
