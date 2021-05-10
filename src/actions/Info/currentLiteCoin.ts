var currentLiteCoin = <T>(currentPrice: T) => {
  return {
  type: "UPDATE_LITECOIN",
  payload: currentPrice
}
}



export default currentLiteCoin;