import React from 'react';
import {View} from 'react-native';
import Styles from './Styles';
import {FlagProps} from './Interface/FlagProps';

const Flag: React.FC<FlagProps> = props => {
  return (
    <View style={Styles.contairner}>
      <View
        style={[Styles.flagpole, props.bigger ? Styles.flagpoleBigger : null]}
      />
      <View style={[Styles.flag, props.bigger ? Styles.flagBigger : null]} />
      <View style={[Styles.base1, props.bigger ? Styles.base1Bigger : null]} />
      <View style={[Styles.base2, props.bigger ? Styles.base2Bigger : null]} />
    </View>
  );
};

export default Flag;
