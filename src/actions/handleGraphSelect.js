import thunk from 'redux-thunk';
import axios from 'axios';
import getData from './Chart/getData';
import changeCoin from './Chart/changeCoin';
// query will be an object
var handleGraphSelect = (query) => {

  return (dispatch) => {
    return axios.get(`/coinData`, { params: {
      name: query.name,
      from: query.from,
      to: query.to
    }})
    .then(({data}) => {
      dispatch(getData(data));
      dispatch(changeCoin(query.name));
      console.log('this is the data from the action', data);
    }).catch((err) => {
      console.log(err);
    })
  }

};


export default handleGraphSelect;
