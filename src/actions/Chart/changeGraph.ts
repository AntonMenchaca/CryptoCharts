

var changeGraph = <T>(newGraph: T) => {
  return {
  type: 'CHANGE_GRAPH',
  payload: newGraph
}}

export default changeGraph;