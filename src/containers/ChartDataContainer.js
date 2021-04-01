import { connect, dispatch } from 'react-redux';
import ChartData from '../components/ChartData';


var mapStoreToProps = (state) => ({
  currentData: state.currentData
});

var ChartDataContainer = connect(mapStoreToProps, null)(ChartData);

export default ChartDataContainer;