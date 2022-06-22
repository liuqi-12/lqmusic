import { createSlice} from '@reduxjs/toolkit'
import { 
  AsyncgetTopBanners,
  AsyncgetHotRcm,
  AsyncgetNewAlbum,
  AsyncgetNewRanking,
  AsyncgetOrgRanking,
  AsyncgetUpRanking
} from "./asyncAction"

const initialState = {
  topBanners: [],
  hotRmc:[],
  newAlbums:[],
  newRank:[],
  upRank:[],
  orgRank:[]
}

const recommendSlice = createSlice({
  name:'recommendReducer',
  initialState,
  reducers:{
    changeTopBanners:(state,action) => {
      // Redux Toolkit允许我们在reducers中直接写改变state的逻辑.
      // 由于使用了Immer库,所以并没有真的改变state
      // 而是检测到“草稿state”的更改并根据这些更改生成一个全新的不可变state
      state.topBanners = action.payload
    },
  },
  extraReducers:{
    [AsyncgetTopBanners.fulfilled]:(state,{payload}) => {
      state.topBanners = payload
    },
    [AsyncgetHotRcm.fulfilled]:(state,{payload}) => {
      state.hotRmc = payload
    },
    [AsyncgetNewAlbum.fulfilled]:(state,{payload}) => {
      state.newAlbums = payload
    },
    [AsyncgetNewRanking.fulfilled]:(state,{payload}) => {
      state.newRank = payload
    },
    [AsyncgetOrgRanking.fulfilled]:(state,{payload}) => {
      state.orgRank = payload
    },
    [AsyncgetUpRanking.fulfilled]:(state,{payload}) => {
      state.upRank = payload
    }
  }

})

export {
  AsyncgetTopBanners,
  AsyncgetHotRcm,
  AsyncgetNewAlbum,
  AsyncgetNewRanking,
  AsyncgetOrgRanking,
  AsyncgetUpRanking
}
export const {changeTopBanners,} = recommendSlice.actions
export default recommendSlice.reducer