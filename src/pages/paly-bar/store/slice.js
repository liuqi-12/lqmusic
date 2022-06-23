import { createSlice} from '@reduxjs/toolkit'

import {randomPintNum} from "@/utils/index"

import {
  AsyncgetSongDetail
} from "./asyncAction"

const initialState = {
  currentSong:{},
  currentTime:0,
  playList:JSON.parse(localStorage.getItem("playList")) || [],
  currentIndex:JSON.parse(localStorage.getItem("currentIndex")) || 1,
  loop:JSON.parse(localStorage.getItem("loop")) || 1 //1循环播放 2 单曲循环 3 随机播放
}
console.log(initialState.playList,initialState.currentIndex)
if(initialState.playList && initialState.playList.length && initialState.currentIndex) {
  initialState.currentSong = initialState.playList[initialState.currentIndex - 1]
}

const playBarSlice = createSlice({
  name:'playBarReducer',
  initialState,
  reducers:{
    changeCurrentTimeAction:(state,action) => {
      state.currentTime = action.payload
    },
    changeCurrentSongAction:(state,action) => {
      state.currentSong = action.payload
    },
    changePlayTypeAction:(state) => {
      state.loop = state.loop + 1 > 3 ? 1:state.loop + 1
      localStorage.setItem("loop",JSON.stringify(state.loop))
    },
    changeCurrentIndexAction:(state,action) => {
      // state.currentSong = action.payload
      // 只有一首歌时，无论怎么切换都是第一首
      if(state.playList.length === 1) {
        state.currentIndex = 1
      } else {
        // 上一首
        if(action.payload === "pre") {
          // 点击上一曲时，无论是单曲循环还是循环播放都应该按照循环播放
          if(state.loop === 1|| state.loop === 2) {
            state.currentIndex = state.currentIndex - 1 < 1 ?state.playList.length : state.currentIndex - 1
          } else {
            // 随机播放
            let index = randomPintNum(state.playList.length) + 1
            while (index === state.currentIndex) {
              index = randomPintNum(state.playList.length) + 1
            }
            state.currentIndex = index
          }

          console.log(state.currentIndex)
        }else if(action.payload === "auto") {
          // 自动播放下一首
          if(state.loop === 1) {
            // 循环播放
            state.currentIndex = state.currentIndex + 1 > state.playList.length? 1 : state.currentIndex + 1
          } else if(state.loop === 2) {
            // 单曲循环
            // state.currentIndex = state.currentIndex
          } else {
            // 随机播放
            let index = randomPintNum(state.playList.length) + 1
            while (index === state.currentIndex) {
              index = randomPintNum(state.playList.length) + 1
            }
            state.currentIndex = index
          }
        }else {
          // 下一首 点击下一曲时，无论是单曲循环还是循环播放都应该按照循环播放
          if(state.loop === 1 || state.loop === 2) {
            state.currentIndex = state.currentIndex + 1 > state.playList.length? 1 : state.currentIndex + 1
          } else {
            // 随机播放
            let index = randomPintNum(state.playList.length) + 1
            while (index === state.currentIndex) {
              index = randomPintNum(state.playList.length) + 1
            }
              state.currentIndex = index
          }
          console.log(state.currentIndex)
        }
      }
      localStorage.setItem("currentIndex",JSON.stringify(state.currentIndex))
      state.currentSong = state.playList[state.currentIndex-1]
    }
  },
  extraReducers:{
    [AsyncgetSongDetail.fulfilled]:(state,{payload}) => {
      let isSame = state.playList.findIndex((p) => p.id === payload.id)
      console.log(isSame)
      if(isSame === -1) {
        // 每播放一首新歌，都要将其插到列表当前播放的下一首，并且当前播放当前
        state.playList.splice(state.currentIndex,0,payload)
        localStorage.setItem("playList",JSON.stringify(state.playList))
        state.currentIndex = state.currentIndex + 1
      } else {
        state.currentIndex = isSame + 1
      }
      localStorage.setItem("currentIndex",JSON.stringify(state.currentIndex))
      state.currentSong = payload
    },
  }
})

export {
  AsyncgetSongDetail
}
export const {
  changeCurrentTimeAction,
  changeCurrentSongAction,
  changeCurrentIndexAction,
  changePlayTypeAction
} = playBarSlice.actions
export default playBarSlice.reducer
