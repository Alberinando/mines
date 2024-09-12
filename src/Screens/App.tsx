import React, {useState} from 'react';
import {StatusBar, View, Alert} from 'react-native';
import params from '../Interfaces/params';
import Styles from './Styles';
import MineField from '../Components/MineField/MineField';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplodsion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from '../Utils/Funcions/Funcitons';
import Header from '../Components/Header/Header';
import LevelSelections from './LevelSelections/LevelSelections';
import {State} from './Interfaces/StateProps/StateProps';

function App() {
  const minesAmount = () => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  const createState = (): State => {
    const cols = params.getColumnsAmount();
    const rows = params.getRowsAmount();
    return {
      board: createMinedBoard(rows, cols, minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    };
  };

  const [state, setState] = useState<State>(createState());

  function onOpenField(row: number, column: number) {
    const board = cloneBoard(state.board);
    openField(board, row, column);
    const lost = hadExplodsion(board);
    const won = wonGame(board);
    if (lost) {
      showMines(board);
      Alert.alert('Perdeuuu', 'boa sorte na próxima', [
        {text: 'OK', onPress: () => setState(createState())},
      ]);
    }
    if (won) {
      Alert.alert('Parabéns', 'Você venceu', [
        {text: 'OK', onPress: () => setState(createState())},
      ]);
    }
    setState({board, lost, won, showLevelSelection: state.showLevelSelection});
  }

  function onSelectField(row: number, column: number) {
    const board = cloneBoard(state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);
    if (won) {
      Alert.alert('Parabéns', 'Você venceu', [
        {text: 'OK', onPress: () => setState(createState())},
      ]);
    }
    setState({
      board,
      lost: state.lost,
      won,
      showLevelSelection: state.showLevelSelection,
    });
  }

  const onLevelSelected = (level: number) => {
    params.difficultLevel = level;
    setState(createState());
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#EEE"
        barStyle={'dark-content'}
      />
      <View style={Styles.container}>
        <LevelSelections
          isVisible={state.showLevelSelection}
          onSelected={onLevelSelected}
          onCancel={() => setState({...state, showLevelSelection: false})}
        />
        <Header
          flagsLeft={minesAmount() - flagsUsed(state.board)}
          onNewGame={() => setState(createState())}
          onFlagPress={() => setState({...state, showLevelSelection: true})}
        />
        <View style={Styles.board}>
          <MineField
            board={state.board}
            onOpenField={onOpenField}
            onSelectField={onSelectField}
          />
        </View>
      </View>
    </>
  );
}

export default App;
