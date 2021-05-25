

type numsArr = number[];

export interface arrayOfNumArrays {
  highestPrice: number;
  lowestPrice: number;
  highestDay: string;
  lowestDay: string;
  avgPrice: number;
    price: numsArr[];
    volume: numsArr[];
    market_caps: numsArr[];
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