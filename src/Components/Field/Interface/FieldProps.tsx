export interface FieldProps {
  mined: boolean;
  opened: boolean;
  nearMines: number;
  exploded: boolean;
  flagged: boolean;
  onOpen?: () => void;
  onSelect?: () => void;
}
