


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
  currentBitcoinPrice: Object;
  currentEthPrice: Object;
  currentLiteCoinPrice: Object;
  currentRipplePrice: Object;
}