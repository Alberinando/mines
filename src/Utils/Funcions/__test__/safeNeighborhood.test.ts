import {safeNeighborhood} from '../Funcitons';

describe('safeNeighborhood', () => {
  it('should return true if all neighbors are safe', () => {
    // Mock dos dados
    const safeField = {
      row: 0,
      column: 0,
      opened: false,
      flagged: false,
      mined: false,
      exploded: false,
      nearMines: 0,
    };
    const board = [
      [safeField, safeField, safeField],
      [safeField, safeField, safeField],
      [safeField, safeField, safeField],
    ];

    const isSafe = safeNeighborhood(board, 1, 1);

    expect(isSafe).toBe(true);
  });

  it('should return false if any neighbor is mined', () => {
    // Mock dos dados
    const safeField = {
      row: 0,
      column: 0,
      opened: false,
      flagged: false,
      mined: false,
      exploded: false,
      nearMines: 0,
    };
    const minedField = {...safeField, mined: true};
    const board = [
      [minedField, safeField, safeField],
      [safeField, safeField, safeField],
      [safeField, safeField, safeField],
    ];

    const isSafe = safeNeighborhood(board, 1, 1);

    expect(isSafe).toBe(false);
  });
});
