import {FieldProps} from '../../Field/Interface/FieldProps';

interface Props {
  board: FieldProps[][];
  onOpenField?: (row: number, column: number) => void;
  onSelectField?: (row: number, column: number) => void;
}

export default Props;
