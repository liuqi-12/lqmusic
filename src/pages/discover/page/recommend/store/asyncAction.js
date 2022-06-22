import { createAsyncThunk } from '@reduxjs/toolkit'
import { getTopBanners,getHotRcm,getNewAlbum,getTopRanking } from "@/services/discover/recommend"

// 异步请求
// 顶部轮播图数据
const AsyncgetTopBanners = createAsyncThunk(
  'recommend/getTopBanners',
  async () => {
    const res = await getTopBanners()
    return res.banners
  }
)
// 热门推荐
const AsyncgetHotRcm = createAsyncThunk(
  'recommend/getHotRcm',
  async () => {
    const res = await getHotRcm()
    return res.result
  }
)
// 新碟上架
const AsyncgetNewAlbum = createAsyncThunk(
  'recommend/getNewAlbum',
  async () => {
    const res = await getNewAlbum()
    return res.albums
  }
)
// const 首页新歌榜
const AsyncgetNewRanking = createAsyncThunk(
  'recommend/getNewRanking',
  async () => {
    const res = await getTopRanking()
    return res.list
  }
)
// const 首页飙升榜
const AsyncgetUpRanking = createAsyncThunk(
  'recommend/getUpRanking',
  async () => {
    // const res = await getTopRanking()
    // return res.list
  }
)
// const 首页原创榜
const AsyncgetOrgRanking = createAsyncThunk(
  'recommend/getOrgRanking',
  async () => {
    // const res = await getTopRanking()
    // return res.list
  }
)

export {
  AsyncgetTopBanners,
  AsyncgetHotRcm,
  AsyncgetNewAlbum,
  AsyncgetNewRanking,
  AsyncgetOrgRanking,
  AsyncgetUpRanking
}
