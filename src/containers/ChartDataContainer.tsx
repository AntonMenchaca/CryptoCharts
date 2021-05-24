import { connect } from 'react-redux';
import ChartData from '../components/ChartData';
import {State} from '../store/store';

var mapStoreToProps = (state: State) => ({
  currentData: state.currentData
});

var ChartDataContainer = connect(mapStoreToProps, null)(ChartData);

export default ChartDataContainer;