

var changeGraph = (newGraph) => {
  console.log(newGraph)
  return {
  type: 'CHANGE_GRAPH',
  payload: newGraph
}}

export default changeGraph;