var currentBitcoin = <T>(currentPrice: T) => {
  return {
  type: "UPDATE_BITCOIN",
  payload: currentPrice
}
}



export default currentBitcoin;