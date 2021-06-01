import { connect } from 'react-redux';
import Header from '../components/Header';
import {State} from '../type/State';
import currentPage from '../actions/currentPage';
import {ThunkDispatch} from 'redux-thunk';
import Action from '../type/actions';


var mapStoreToProps = (state: State) => ({
  ethPrice: state.currentEthPrice,
  bitcoinPrice: state.currentBitcoinPrice,
  litecoinPrice: state.currentLiteCoinPrice,
  ripplePrice: state.currentRipplePrice,
  viewNews: state.showNews
});

var mapDispatchToProps = (dispatch: ThunkDispatch<State, void, Action>) => ({
  changePage: (pageChange: boolean) => (dispatch(currentPage(pageChange)))
})


var HeaderContainer = connect(mapStoreToProps, mapDispatchToProps)(Header);

export default HeaderContainer;