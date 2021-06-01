


type stringArr = string[];

export interface arrayOfNumArrays {
    highestPrice: number;
    lowestPrice: number;
    highestDay: string;
    lowestDay: string;
    avgPrice: number;
    price: stringArr[];
    volume: stringArr;
    market_caps: stringArr;
}

export interface State  {
  currentCoin: string;
  currentData: arrayOfNumArrays;
  news: [];
  currentBitcoinPrice: {
    usd: number;
    usd_24h_change: number;
  };
  currentEthPrice: {
    usd: number;
    usd_24h_change: number;
  };
  currentLiteCoinPrice:{
    usd: number;
    usd_24h_change: number;
  };
  currentRipplePrice: {
    usd: number;
    usd_24h_change: number;
  };
  showNews: boolean;
}