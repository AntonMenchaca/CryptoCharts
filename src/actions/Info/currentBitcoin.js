var currentBitcoin = (currentPrice) => {
  return {
  type: "UPDATE_BITCOIN",
  payload: currentPrice
}
}



export default currentBitcoin;