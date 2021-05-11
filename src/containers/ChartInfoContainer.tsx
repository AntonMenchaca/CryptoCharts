import { connect } from 'react-redux';
import ChartInfo from '../components/ChartInfo';
import handleGraphSelect from '../actions/handleGraphSelect';
import {State} from '../store/store';
import {Dispatch} from 'redux';
import GraphDate from '../type/graph'

var mapStoreToProps = (state: State) => ({
  coinName: state.currentCoin,
  currentData: state.currentData,
  allNews: state.news
});

var mapDispatchToProps = (dispatch: Dispatch) => ({
  updateGraph: (newGraphData: GraphDate) => (dispatch(handleGraphSelect(newGraphData)))

})

var ChartInfoContainer = connect(mapStoreToProps, mapDispatchToProps)(ChartInfo);

export default ChartInfoContainer;

