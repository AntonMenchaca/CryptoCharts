import thunk from 'redux-thunk';
import axios from 'axios';
import updateNews from './updateNews';
import currentBitcoin from './currentBitcoin';
import currentLiteCoin from './currentLiteCoin';
import currentRipple from './currentRipple';
import currentEthereum from './currentEthereum';
import TOKEN from '../../../config';


var getNews = () => {
  return (dispatch) => {

    axios.get(`https://cryptonews-api.com/api/v1?tickers=BTC,ETH,XRP&items=50&token=${TOKEN}`)
    .then(({data}) => {
      dispatch(updateNews(data));
    }).catch((err) => {
      console.log(err);
    })
    axios.get('/bigCoin').then(({data}) => {
      dispatch(currentBitcoin(data.bitcoin))
      dispatch(currentEthereum(data.ethereum))
      dispatch(currentLiteCoin(data.litecoin))
      dispatch(currentRipple(data.ripple))
    })
  }

};


export default getNews;