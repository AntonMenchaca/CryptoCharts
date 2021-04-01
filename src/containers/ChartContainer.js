import { connect, dispatch } from 'react-redux';
import Chart from '../components/Chart';
import changeGraph from '../actions/Chart/changeGraph';


var mapStoreToProps = (state) => ({
  coinName: state.currentCoin,
  currentData: state.currentData,
  chooseGraph: state.changeGraphType
});
var mapDispatchToProps = (dispatch) => ({
  chooseGraph: (newGraph) => (dispatch(changeGraph(newGraph))),
})

var ChartContainer = connect(mapStoreToProps, mapDispatchToProps)(Chart);

export default ChartContainer;