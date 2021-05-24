var updateNews = <T>(news: {data: T}) => {
  return {
  type: "UPDATE_NEWS",
  payload: news.data
}
}



export default updateNews;