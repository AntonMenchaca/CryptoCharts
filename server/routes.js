const router = require('express').Router();
const coinAPI = require('./helper/apiCoin');

var func = async() => {
  let data = await coinAPI.ping();
  console.log(data);
}

func();

router.get('/', (req, res) => {
  func();
})