import { connect } from 'react-redux';
import Chart from '../components/Chart';
import changeGraph from '../actions/Chart/changeGraph';
import {State} from '../type/State';
import {Dispatch} from 'redux';
import GraphDate from '../type/graph';

var mapStoreToProps = (state: State) => ({
  coinName: state.currentCoin,
  currentData: state.currentData,
});



var mapDispatchToProps = (dispatch: Dispatch) => ({
  chooseGraph: (newGraph: GraphDate) => (dispatch(changeGraph(newGraph))),
})

var ChartContainer = connect(mapStoreToProps, mapDispatchToProps)(Chart);

export default ChartContainer;