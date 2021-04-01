const router = require('express').Router();
const coinAPI = require('./helper/apiCoin');
const apiControllers = require('./helper/controllers');
var moment = require('moment');
const news = require('./helper/coinNews');


var func = () => {
  coinAPI.coins.fetchMarketChart('bitcoin', {days: 30, interval: 'daily'}).then(({data}) => {
    console.log(data.prices)
  }).catch((err) => {
    console.log(err);
  })
}

router.get('/bigcoin', (req, res) => {
  return apiControllers.getBigCoinData().then(({data}) => {
    res.send(data);
  })
})


router.get('/coinData', (req, res) => {
  return apiControllers.getCoinData({name: req.query.name, from: req.query.from, to: req.query.to}).then(({data}) => {
    var graphData = {
      price: [],
      volume: [],
      market_caps: [],
    };
    data.prices.map((data) => {
      var realTime = moment(data[0]);
      var newTime = realTime.format("M/D/YYYY");
      graphData.price.push([newTime, data[1].toFixed(4)])
    })
    data.total_volumes.map((data) => {
      graphData.volume.push(data[1].toFixed(4))
    })

    data.market_caps.map((data) => {
      graphData.market_caps.push(data[1].toFixed(4))
    })
    res.send(graphData);
  })
})

module.exports = router;