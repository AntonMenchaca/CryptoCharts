const router = require("express").Router();
const coinAPI = require("./helper/apiCoin");
const apiControllers = require("./helper/controllers");
var moment = require("moment");
const axios = require("axios");
const path = require("path");

async function getNews(req, res, next) {
  try {
    data = await axios.get(
      `https://cryptonews-api.com/api/v1/category?section=general&items=50&token=${process.env.API_TOKEN}`
    );
    res.send(data);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

router.get("/allNews", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

router.get("/bigcoin", (req, res) => {
  return apiControllers
    .getBigCoinData()
    .then(({ data }) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/news", getNews);

router.get("/coinData", (req, res) => {
  return apiControllers
    .getCoinData({
      name: req.query.name,
      from: req.query.from,
      to: req.query.to,
    })
    .then(({ data }) => {
      var graphData = {
        price: [],
        volume: [],
        market_caps: [],
        lowestPrice: 0,
        highestPrice: 0,
        highestDay: 0,
        lowestDay: 0,
        avgPrice: 0,
      };
      data.prices.map((data, i) => {
        var realTime = moment(data[0]);
        var newTime = realTime.format("M/D/YYYY");
        graphData.price.push([newTime, data[1].toFixed(4)]);
        if (i === 0) {
          graphData.lowestPrice = data[1] + 0;
          graphData.highestPrice = data[1];
          graphData.highestDay = i;
          graphData.lowestDay = i;
        }
        if (data[1] > graphData.highestPrice) {
          graphData.highestPrice = data[1];
          graphData.highestDay = i;
        }
        if (data[1] < graphData.lowestPrice) {
          graphData.lowestPrice = data[1];
          graphData.lowestDay = i;
        }
        graphData.avgPrice += data[1];
      });
      graphData.avgPrice = graphData.avgPrice / data.prices.length;
      var realTime = moment(data[0]);
      var newTime = realTime.format("M/D/YYYY");
      graphData.highestDay = moment(
        data.prices[graphData.highestDay][0]
      ).format("M/D/YYYY");
      graphData.lowestDay = moment(data.prices[graphData.lowestDay][0]).format(
        "M/D/YYYY"
      );

      data.total_volumes.map((data) => {
        graphData.volume.push(data[1].toFixed(4));
      });

      data.market_caps.map((data) => {
        graphData.market_caps.push(data[1].toFixed(4));
      });
      res.send(graphData);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
