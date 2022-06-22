import { configureStore } from '@reduxjs/toolkit'
import recommendReducer from "@/pages/discover/page/recommend/store/slice"
import playBarReducer from "@/pages/paly-bar/store/slice"

export const store = configureStore({
  reducer: {
    recommendData:recommendReducer,
    playBarData:playBarReducer
  },
})