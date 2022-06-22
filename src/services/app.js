import lqServer from "./request";

export function getSearchSuggest(keywords) {
  return lqServer.get('/search/suggest',{
    params:{
      keywords,
      type:'pc'
    }
  })
}
