import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import Style from './Styles';
import {LevelSelectionsProps} from './Interfaces/LevelSelectionsProps';

export default (props: LevelSelectionsProps) => {
  return (
    <Modal
      onRequestClose={props.onCancel}
      visible={props.isVisible}
      animationType="slide"
      transparent={true}>
      <View style={Style.frame}>
        <View style={Style.container}>
          <Text style={Style.title}>Selecionar o Nível</Text>
          <View style={Style.Buttons}>
            <TouchableOpacity
              style={[Style.button, Style.bgEasy]}
              onPress={() => props.onSelected(0.1)}>
              <Text style={Style.buttonLabel}>Fácil</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Style.button, Style.bgNormal]}
              onPress={() => props.onSelected(0.2)}>
              <Text style={Style.buttonLabel}>Intermediário</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[Style.button, Style.bgHard]}
              onPress={() => props.onSelected(0.3)}>
              <Text style={Style.buttonLabel}>Díficil</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
