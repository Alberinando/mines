import {getNeighbors} from '../Funcitons';

describe('getNeighbors', () => {
  it('should return the correct neighbors for a given cell', () => {
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

    const neighbors = getNeighbors(board, 1, 1);

    expect(neighbors.length).toBe(8);
    neighbors.forEach(neighbor => {
      expect(neighbor).toEqual(mockField);
    });
  });

  it('should return the correct neighbors for a cell on the edge of the board', () => {
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

    const neighbors = getNeighbors(board, 0, 0);

    expect(neighbors.length).toBe(3);
    neighbors.forEach(neighbor => {
      expect(neighbor).toEqual(mockField);
    });
  });
});
