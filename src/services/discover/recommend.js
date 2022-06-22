
import lqServer,{WYServer} from '../request'

// 获取首页轮播图
export function getTopBanners() {
  return lqServer.get('/banner',{params: {
    type: 0
  }})
}

// 获取推荐页热门推荐
export function getHotRcm(limit=8) {
  return lqServer.get('/personalized',{params: {
    limit
  }})
}

// 获取推荐页新碟上架
export function getNewAlbum(limit=10,offset=1) {
  return lqServer.get('/top/album',{params: {
    limit,
    offset
  }})
}

// 获取推荐页榜单
// export function getTopRanking() {
//   return lqServer.get('/toplist',{
//     // params:{
//     //   id:19723756
//     // }
//   })
// }

export function getTopRanking(idx) {
  return WYServer.get('/playlist/detail',{
    params:{
      id:19723756
    }
  })
}
