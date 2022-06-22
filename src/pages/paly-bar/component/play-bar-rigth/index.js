import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {changePlayTypeAction} from "../../store/slice"

import {PlayBarRigthStyle} from "./style"

const PlayBarRigth = memo(() => {

  const {playLoop} = useSelector(state => ({
    playLoop:state.playBarData.loop
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
        <div className='inco icon-song-list sprite_playbar'></div>
      </div>
    </PlayBarRigthStyle>
  )
})

export default PlayBarRigth
