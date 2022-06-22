import lqServer,{WYServer} from './request'

// 获取歌曲信息
export function getSongDetail(ids) {
  return WYServer.get(`/song/detail?ids=[${ids}]`)
}
