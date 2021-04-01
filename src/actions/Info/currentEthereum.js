var currentEthereum = (currentPrice) => {
  return {
  type: "UPDATE_ETHEREUM",
  payload: currentPrice
}
}



export default currentEthereum;