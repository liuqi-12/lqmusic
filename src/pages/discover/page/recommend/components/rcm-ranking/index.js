import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {
  AsyncgetNewRanking,
  AsyncgetOrgRanking,
  AsyncgetUpRanking
} from '../../store/slice'

import SongRankingV1 from "@/components/song-ranking-v1"
import {RcmRankingStyle} from "./style"

const RcmRanking = memo(() => {
  // state

  // redux
  const {upRankList,newRankList,orgRankList} = useSelector((state) =>({
    upRankList:state.recommendData.upRank,
    newRankList:state.recommendData.newpRank,
    orgRankList:state.recommendData.orgRank
  }),shallowEqual)
  const dispatch = useDispatch()
  // other hooks
  useEffect(() => {
    dispatch(AsyncgetNewRanking())
    dispatch(AsyncgetOrgRanking())
    dispatch(AsyncgetUpRanking())
  },[dispatch])
  // 其他逻辑
  return (
    <RcmRankingStyle>
      <div className='rank-item'>
        <SongRankingV1 info={upRankList} />
      </div>
      <div className='rank-item'>
        <SongRankingV1 info={newRankList}/>
      </div>
      <div className='rank-item'>
        <SongRankingV1 info={orgRankList}/>
      </div>
    </RcmRankingStyle>
  )
})

export default RcmRanking