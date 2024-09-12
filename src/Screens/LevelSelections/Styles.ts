import {StyleSheet} from 'react-native';

const Style = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: '5%',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
    paddingVertical: '10%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
  },
  button: {
    marginTop: 30,
    padding: '5%',
    paddingVertical: '5%',
    marginHorizontal: '3%',
    borderRadius: 8,
  },
  bgEasy: {
    backgroundColor: '#49B65D',
  },
  bgNormal: {
    backgroundColor: '#2765F7',
  },
  bgHard: {
    backgroundColor: '#F26337',
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  },
  Buttons: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
  },
});

export default Style;
