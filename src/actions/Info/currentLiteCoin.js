var currentLiteCoin = (currentPrice) => {
  return {
  type: "UPDATE_LITECOIN",
  payload: currentPrice
}
}



export default currentLiteCoin;