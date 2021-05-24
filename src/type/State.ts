export default interface State {
  currentCoin: string,
  currentData: {
    price: number[],
    volume: number[],
    market_caps: number[],
  },
  news: any[],
  currentBitcoinPrice: {},
  currentEthPrice: {},
  currentLiteCoinPrice: {},
  currentRipplePrice: {},
}