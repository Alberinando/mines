import params from '../../Interfaces/params';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  field: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.blockSize,
  },
  regular: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
    backgroundColor: '#999999',
    borderLeftColor: '#CCCCCC',
    borderTopColor: '#CCCCCC',
    borderRightColor: '#333333',
    borderBottomColor: '#333333',
    textAlign: 'center',
  },
  opened: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
    backgroundColor: '#999999',
    borderColor: '#777777',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  label: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
    fontWeight: 'bold',
    fontSize: params.fontSize,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: '15%',
  },
  exploded: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
    backgroundColor: '#FF0000',
    borderColor: '#FF0000',
  },
  flagged: {
    height: params.blockSize,
    width: params.blockSize,
    borderWidth: params.borderSize,
    backgroundColor: '#999999',
    borderLeftColor: '#CCCCCC',
    borderTopColor: '#CCCCCC',
    borderRightColor: '#333333',
    borderBottomColor: '#333333',
    textAlign: 'center',
  },
});

export default styles;
