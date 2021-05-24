
var changeCoin = <T>(newCoin: T) => {
  return {
  type: "CHANGE_NAME",
  payload: newCoin
}}

export default changeCoin;