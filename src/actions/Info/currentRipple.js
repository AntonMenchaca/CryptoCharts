var currentRipple = (currentPrice) => {
  return {
  type: "UPDATE_RIPPLE",
  payload: currentPrice
}
}



export default currentRipple;