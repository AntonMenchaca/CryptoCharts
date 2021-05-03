var changeCoin = (coinName: string) => {
  return {
  type: 'CHANGE_NAME',
  payload: coinName
}}

export default changeCoin;