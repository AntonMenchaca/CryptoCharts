var currentEthereum = <T>(currentPrice: T) => {
  return {
  type: "UPDATE_ETHEREUM",
  payload: currentPrice
}
}



export default currentEthereum;