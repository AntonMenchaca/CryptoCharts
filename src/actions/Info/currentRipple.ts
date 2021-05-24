var currentRipple = <T>(currentPrice: T) => {
  return {
  type: "UPDATE_RIPPLE",
  payload: currentPrice
}
}



export default currentRipple;