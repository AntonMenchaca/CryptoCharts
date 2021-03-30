var changeCoin = (coinName) => {
  return {
  type: 'CHANGE_NAME',
  payload: coinName
}}

export default changeCoin;