import React from 'react';
import Field from '../Field/Field';
import Props from './Interface/MineFieldProps';
import {FieldProps} from '../Field/Interface/FieldProps';
import {View} from 'react-native';
import Style from './Style';

const MineField: React.FC<Props> = props => {
  const rows = props.board.map((row: FieldProps[], r: number) => {
    const columns = row.map((field: FieldProps, c: number) => {
      return (
        <Field
          {...field}
          key={c}
          onOpen={() => props.onOpenField && props.onOpenField(r, c)}
          onSelect={() => props.onSelectField && props.onSelectField(r, c)}
        />
      );
    });
    return (
      <View style={Style.row} key={r}>
        {columns}
      </View>
    );
  });
  return <View style={Style.container}>{rows}</View>;
};

export default MineField;
