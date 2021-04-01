import thunk from 'redux-thunk';
import axios from 'axios';
import getData from './Chart/getData';
import changeCoin from './Chart/changeCoin';
import store from '../store/store';
import getNews from './Info/getNews';

var handleGraphSelect = (query) => {

  return (dispatch) => {
    var isNewsLoaded = store.getState().news;
    return axios.get(`/coinData`, { params: {
      name: query.name,
      from: query.from,
      to: query.to
    }})
    .then(({data}) => {
      if (isNewsLoaded.length === 0) {
        dispatch(getNews())
      }
      dispatch(getData(data));
      dispatch(changeCoin(query.name));
      console.log('this is the data from the action', data);
      return data;
    }).catch((err) => {
      console.log(err);
    })
  }

};


export default handleGraphSelect;
