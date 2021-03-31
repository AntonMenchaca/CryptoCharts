import { connect, dispatch } from 'react-redux';
import ChartInfo from '../components/ChartInfo';
import changeCoin from '../actions/Chart/ChangeCoin';
import handleGraphSelect from '../actions/handleGraphSelect';

var mapStoreToProps = (state) => ({
  coinName: state.currentCoin,
  currentData: state.currentData
});

var mapDispatchToProps = (dispatch) => ({
  changeCoinName: (newCoin) => (dispatch(changeCoin(newCoin))),
  updateGraph: (newGraphData) => (dispatch(handleGraphSelect(newGraphData)))

})

var ChartInfoContainer = connect(mapStoreToProps, mapDispatchToProps)(ChartInfo);

export default ChartInfoContainer;