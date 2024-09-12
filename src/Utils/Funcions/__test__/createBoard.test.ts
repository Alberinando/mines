import {createBoard} from '../Funcitons';

describe('createBoard', () => {
  it('creates a board with the correct dimensions', () => {
    const rows = 5;
    const columns = 5;
    const board = createBoard(rows, columns);

    // Verifica se o tabuleiro tem o número correto de linhas
    expect(board.length).toBe(rows);

    // Verifica se cada linha tem o número correto de colunas
    board.forEach(row => {
      expect(row.length).toBe(columns);
    });

    // Verifica se cada célula do tabuleiro tem a estrutura correta
    board.forEach(row => {
      row.forEach(cell => {
        expect(cell).toEqual({
          row: expect.any(Number),
          column: expect.any(Number),
          opened: false,
          flagged: false,
          mined: false,
          exploded: false,
          nearMines: 0,
        });
      });
    });
  });
});
