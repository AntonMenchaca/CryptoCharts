import axios from 'axios';
import getData from './Chart/getData';
import changeCoin from './Chart/changeCoin';
import {Dispatch} from 'redux';

interface QueryObj {
    name: string;
    from: string;
    to: string;
}
var handleGraphSelect = (query: QueryObj)  => {

  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios.get(`/coinData`, {
        params: {
          name: query.name,
          from: query.from,
          to: query.to
        }
      });
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
