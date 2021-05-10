import { connect } from 'react-redux';
import Header from '../components/Header';
// import State from "../interface/State";

var mapStoreToProps = (state) => ({
  ethPrice: state.currentEthPrice,
  bitcoinPrice: state.currentBitcoinPrice,
  litecoinPrice: state.currentLiteCoinPrice,
  ripplePrice: state.currentRipplePrice
});



var HeaderContainer = connect(mapStoreToProps, null)(Header);

export default HeaderContainer;