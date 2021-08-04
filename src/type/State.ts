


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
export interface PriceRange {
  name: string;
  to: string;
  from: string;
}

export interface Graph {
   updateGraph: (priceObj: PriceRange) => void
   currentData: arrayOfNumArrays
}
export interface CoinData {
  currentData: arrayOfNumArrays
}

export interface CurrentCoinProps {
  coinName: string;
  currentData: arrayOfNumArrays;
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

export interface CoinProps {
  ethPrice:{
    usd: number;
    usd_24h_change: number;
  };
  bitcoinPrice: {
    usd: number;
    usd_24h_change: number;
  };
  litecoinPrice:{
    usd: number;
    usd_24h_change: number;
  };
  ripplePrice: {
    usd: number;
    usd_24h_change: number;
  };
  viewNews: Boolean;
  changePage: (pageChange: boolean) =>
  { type: string; payload: boolean; }
}
