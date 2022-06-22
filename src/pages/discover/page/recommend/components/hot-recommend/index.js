import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {AsyncgetHotRcm} from "../../store/slice"

import {HotRcmStlyed} from "./style"
import SongCoverV1 from '@/components/song-cover-v1'

const HotRecommend = memo(() => {
  // state

  // redux hooks
  const {rmcData} = useSelector((state) => ({
    rmcData:state.recommendData.hotRmc
  }),shallowEqual)
  const dispatch = useDispatch()
  // other hooks
  useEffect(() => {
    dispatch(AsyncgetHotRcm())
  },[dispatch])
  return (
    <HotRcmStlyed>
      {
        rmcData.map(r => <SongCoverV1 key={r.id} songInfo={r}/>)
      }
    </HotRcmStlyed>
  )
})

export default HotRecommend