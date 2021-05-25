import { connect } from 'react-redux';
import ChartData from '../components/ChartData';
import {State} from '../type/State';

var mapStoreToProps = (state: State) => ({
  currentData: state.currentData
});

var ChartDataContainer = connect(mapStoreToProps)(ChartData);

export default ChartDataContainer;