
var changeCoin = <T>(coinName: T) => {
  return {
  type: 'CHANGE_NAME',
  payload: coinName
}}

export default changeCoin;