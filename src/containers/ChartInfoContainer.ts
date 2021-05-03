import { connect } from 'react-redux';
import ChartInfo from '../components/ChartInfo';
import changeCoin from '../actions/Chart/changeCoin';
import handleGraphSelect from '../actions/handleGraphSelect';
import State from "../interface/State";


var mapStoreToProps = (state: State) => ({
  coinName: state.currentCoin,
  currentData: state.currentData
});

var mapDispatchToProps = (dispatch) => ({
  changeCoinName: (newCoin: string) => (dispatch(changeCoin(newCoin))),
  updateGraph: (newGraphData) => (dispatch(handleGraphSelect(newGraphData)))

})

var ChartInfoContainer = connect(mapStoreToProps, mapDispatchToProps)(ChartInfo);

export default ChartInfoContainer;

