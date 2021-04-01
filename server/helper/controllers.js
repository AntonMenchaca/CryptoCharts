const client = require('./apiCoin');
var moment = require('moment');

var unixConverter = (date) => {
  var unix = moment(date, 'YYYY-MM-DD').valueOf().toString();
  return unix.slice(0, -3)
};

module.exports = {
  getCoinData: ({name, from, to}) => {
    return client.coins.fetchMarketChartRange(`${name}`, {from: unixConverter(from), to: unixConverter(to)})
  },
  getBigCoinData: () => {
    return client.simple.price({ids: ['bitcoin', 'ethereum', 'litecoin', 'ripple'], include_24hr_change: true})
  }
};