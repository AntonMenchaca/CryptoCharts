var updateNews = (news) => {
  return {
  type: "UPDATE_NEWS",
  payload: news.data
}
}



export default updateNews;