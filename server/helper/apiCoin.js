const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

/*
{
     success: Boolean,
     message: String,
     code: Number,
     data: Object
 }
 */

 module.exports = CoinGeckoClient;