import { connect, dispatch } from 'react-redux';
import ChartInfo from '../components/ChartInfo';
import changeCoin from '../actions/Chart/ChangeCoin';
import getData from '../actions/Chart/getData';

var mapStoreToProps = (state) => ({
  coinName: state.currentCoin,
  currentData: state.currentData
});

var mapDispatchToProps = (dispatch) => ({
  changeCoinName: (newCoin) => (dispatch(changeCoin(newCoin))),
  updateGraph: (newGraphData) => (dispatch(getData(newGraphData)))

})

var ChartInfoContainer = connect(mapStoreToProps)(ChartInfo);

export default ChartInfoContainer;