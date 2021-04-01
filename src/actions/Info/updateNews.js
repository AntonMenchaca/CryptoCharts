var updateNews = (news) => {
  console.log('this is the news', news.data);
  return {
  type: "UPDATE_NEWS",
  payload: news.data
}
}



export default updateNews;