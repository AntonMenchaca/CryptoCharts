import { connect, dispatch } from 'react-redux';
import Chart from '../components/Chart';
// import getData from '../actions/Chart/getData';


// currentCoin: 'Bitcoin',
// currentData: {}
var mapStoreToProps = (state) => ({
  coinName: state.currentCoin,
  currentData: state.currentData
});


var ChartContainer = connect(mapStoreToProps, null)(Chart);

export default ChartContainer;