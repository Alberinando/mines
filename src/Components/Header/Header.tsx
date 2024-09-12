import React from 'react';
import Flag from '../Flag/Flag';
import {Text, TouchableOpacity, View} from 'react-native';
import Styles from './Styles';
import {headerProps} from './Interfaces/HeaderProps';

export default (props: headerProps) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.flagContainer}>
        <TouchableOpacity onPress={props.onFlagPress} style={Styles.flagButton}>
          <Flag bigger />
        </TouchableOpacity>
        <Text style={Styles.flagsLeft}>= {props.flagsLeft}</Text>
      </View>
      <TouchableOpacity style={Styles.button} onPress={props.onNewGame}>
        <Text style={Styles.buttonLabel}>Novo Jogo</Text>
      </TouchableOpacity>
    </View>
  );
};
