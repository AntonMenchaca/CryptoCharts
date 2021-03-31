import thunk from 'redux-thunk';
import axios from 'axios';



var getData = (data) => {
  return {
  type: 'GET_DATA',
  payload: data
}}

export default getData;