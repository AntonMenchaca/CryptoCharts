const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

//   All calls are returned in the following format:

/*
{
     success: Boolean,
     message: String,
     code: Number,
     data: Object
 }
 */

 module.exports = CoinGeckoClient;