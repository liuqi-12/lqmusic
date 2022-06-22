import React, { forwardRef, memo, useImperativeHandle, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  changeCurrentIndexAction
} from "../../store/slice"

import {PlayBarLeftStyle} from "./style"


const PlayBarLeft = memo(forwardRef((props,ref) => {
  console.log('left')
  useImperativeHandle(ref,() => ({
    refPlayMusic:() => {
      playMusic()
    },
    refSetPlaying:() => {
      setPlaying()
    }
  }))
  // state
  const [isPlay,setIsPlay] = useState(false)

  // rudex
  const dispatch = useDispatch()

  // 其他逻辑
  const playMusic = () => {
    setIsPlay(true)
    props.playMusic()
  }
  const stopMusic = () => {
    setIsPlay(false)
    props.stopMusic()
  }

  const setPlaying = () => {
    setIsPlay(true)
  }

  // 上一曲
  const playPreMusic = () => {
    dispatch(changeCurrentIndexAction("pre"))
  }
  // 下一曲
  const playNextMusic = () => {
    dispatch(changeCurrentIndexAction("next"))
  }

  return (
    <PlayBarLeftStyle className='paly-operate'>
      <div onClick={e => playPreMusic()} className='pre sprite_playbar'></div>
      {
        !isPlay?
        <div onClick={e => playMusic()} className='stop sprite_playbar'></div> :
        <div onClick={e => stopMusic()} className='play sprite_playbar'></div>
      }
      <div onClick={e => playNextMusic()} className='next sprite_playbar'></div>
    </PlayBarLeftStyle>
  )
}))

export default PlayBarLeft
