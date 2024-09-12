import React from 'react';
import {Text, View, ColorValue, TouchableWithoutFeedback} from 'react-native';
import {FieldProps} from './Interface/FieldProps';
import Mine from '../Mine/Mine';
import styles from './Styles';
import Flag from '../Flag/Flag';

const Field: React.FC<FieldProps> = props => {
  const {mined, opened, nearMines, exploded, flagged} = props;
  const styleField = [styles.field];
  if (opened) {
    styleField.push(styles.opened);
  }
  if (exploded) {
    styleField.push(styles.exploded);
  }
  if (flagged) {
    styleField.push(styles.flagged);
  }
  if (!opened && !exploded) {
    styleField.push(styles.regular);
  }

  let color: ColorValue | undefined;
  if (nearMines > 0) {
    if (nearMines === 1) {
      color = '#2A28D7';
    } else if (nearMines === 2) {
      color = '#2B520F';
    } else if (nearMines > 2 && nearMines < 6) {
      color = '#F9060A';
    } else if (nearMines >= 6) {
      color = '#F221A9';
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={props.onOpen}
      onLongPress={props.onSelect}>
      <View style={styleField}>
        {!mined && opened && nearMines > 0 ? (
          <Text style={[styles.label, {color: color}]}>{nearMines}</Text>
        ) : (
          false
        )}
        {mined && opened ? <Mine /> : false}
        {flagged && !opened ? <Flag bigger={false} /> : false}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Field;
