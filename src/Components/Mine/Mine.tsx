import React from 'react';
import {View} from 'react-native';
import Style from './Styles';

const Mine = () => {
  return (
    <View style={Style.container}>
      <View style={Style.coreMine} />
      <View style={Style.line} />
      <View style={[Style.line, {transform: [{rotate: '45deg'}]}]} />
      <View style={[Style.line, {transform: [{rotate: '90deg'}]}]} />
      <View style={[Style.line, {transform: [{rotate: '135deg'}]}]} />
    </View>
  );
};

export default Mine;
