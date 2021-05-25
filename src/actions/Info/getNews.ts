import axios from 'axios';
import updateNews from './updateNews';
import currentBitcoin from './currentBitcoin';
import currentLiteCoin from './currentLiteCoin';
import currentRipple from './currentRipple';
import currentEthereum from './currentEthereum';
import {Dispatch} from 'redux';
import {store} from '../../store/store';
var getNews = () => {
  return async (dispatch: Dispatch) => {
    try {

      await axios.get('/news')
      .then(({data}) => {
        dispatch(updateNews(data));

      }).catch((err) => {
        console.log(err);
      })
      await axios.get('/bigCoin').then(({data}) => {
        console.log(store.getState());
        dispatch(currentBitcoin(data.bitcoin))
        dispatch(currentEthereum(data.ethereum))
        dispatch(currentLiteCoin(data.litecoin))
        dispatch(currentRipple(data.ripple))
      })
    }
    catch (err) {
      console.log(err);
    }
  }

};


export default getNews;