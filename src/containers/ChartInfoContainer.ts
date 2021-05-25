import { connect } from 'react-redux';
import ChartInfo from '../components/ChartInfo';
import handleGraphSelect from '../actions/handleGraphSelect';
import {State} from '../type/State';
import {ThunkDispatch} from 'redux-thunk';
import GraphDate from '../type/graph'
import Action from '../type/actions';

var mapStoreToProps = (state: State) => ({
  currentData: state.currentData,
});

var mapDispatchToProps = (dispatch: ThunkDispatch<State, void, Action>) => ({
  updateGraph: (newGraphData: GraphDate) => (dispatch(handleGraphSelect(newGraphData)))

})

var ChartInfoContainer = connect(mapStoreToProps, mapDispatchToProps)(ChartInfo);

export default ChartInfoContainer;

