import axios from 'axios';
import getData from './Chart/getData';
import changeCoin from './Chart/changeCoin';
import store, {RootState} from '../store/store';
import getNews from './Info/getNews';
import { Dispatch, AnyAction } from 'redux';
import {ThunkAction} from 'redux-thunk'


interface QueryObj {
name: string;
from: string;
to: string;
}
var handleGraphSelect = (query: QueryObj): ThunkAction<void, RootState, unknown, AnyAction> => {

  return async (dispatch) => {
    var isNewsLoaded = store.getState().news;
    try {
      const { data } = await axios.get(`/coinData`, {
        params: {
          name: query.name,
          from: query.from,
          to: query.to
        }
      });
      if (isNewsLoaded.length === 0) {
        dispatch(getNews());
      }
      dispatch(getData(data));
      dispatch(changeCoin(query.name));
      return data;
    }
    catch (err) {
      console.log(err);
    }
  }

};


export default handleGraphSelect;
