import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {changePlayTypeAction} from "../../store/slice"

import {PlayBarRigthStyle} from "./style"

const PlayBarRigth = memo((props) => {
  const {playLoop,playList} = useSelector(state => ({
    playLoop:state.playBarData.loop,
    playList:state.playBarData.playList
  }),shallowEqual)

  const dispatch = useDispatch()

  const mapPlayType = () => {
    if(playLoop === 1) {
      return <div className='inco icon-xunhun sprite_playbar'></div>
    } else if(playLoop === 2) {
      return <div className='inco icon-danqu sprite_playbar'></div>
    } else {
      return <div className='inco icon-suiji sprite_playbar'></div>
    }
  }

  const changePlayType = () => {
    dispatch(changePlayTypeAction())
  }

  return (
    <PlayBarRigthStyle>
      <div className='share-add'>
          <div className='inco icon-add sprite_playbar'></div>
          <div className='inco icon-share sprite_playbar'></div>
      </div>
      <div className='play-info sprite_playbar'>
        <div className='inco icon-shenyin sprite_playbar'></div>
        <div onClick={changePlayType}>
          {
            mapPlayType()
          }
        </div>
        <div onClick={e => props.changeIsShowPlayListLyc()} className='inco icon-song-list sprite_playbar'>
          <span className='songs-num'>{playList.length}</span>
        </div>
      </div>
    </PlayBarRigthStyle>
  )
})

export default PlayBarRigth
