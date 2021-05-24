

var getData = <T>(data: T) => {
  return {
  type: 'GET_DATA',
  payload: data
}}

export default getData;