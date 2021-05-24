import { connect } from 'react-redux';
import Header from '../components/Header';
import {State} from '../store/store';

var mapStoreToProps = (state: State) => ({
  ethPrice: state.currentEthPrice,
  bitcoinPrice: state.currentBitcoinPrice,
  litecoinPrice: state.currentLiteCoinPrice,
  ripplePrice: state.currentRipplePrice
});



var HeaderContainer = connect(mapStoreToProps, null)(Header);

export default HeaderContainer;