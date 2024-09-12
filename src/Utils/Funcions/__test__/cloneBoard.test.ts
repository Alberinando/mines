import {cloneBoard} from '../Funcitons';

describe('cloneBoard', () => {
  it('should create a deep copy of the board', () => {
    // Mock dos dados
    const mockField = {
      row: 0,
      column: 0,
      opened: false,
      flagged: false,
      mined: false,
      exploded: false,
      nearMines: 0,
    };
    const board = [
      [mockField, mockField, mockField],
      [mockField, mockField, mockField],
      [mockField, mockField, mockField],
    ];

    const clonedBoard = cloneBoard(board);

    expect(clonedBoard).toEqual(board);
    expect(clonedBoard).not.toBe(board);

    // Verifique se cada campo foi clonado corretamente
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        expect(clonedBoard[i][j]).toEqual(board[i][j]);
        expect(clonedBoard[i][j]).not.toBe(board[i][j]);
      }
    }
  });
});
