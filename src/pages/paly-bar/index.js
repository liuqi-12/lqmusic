import React, { memo, useRef,useEffect, useCallback, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {AsyncgetSongDetail,changeCurrentTimeAction,changeCurrentIndexAction} from "./store/slice"
import {getPalySong} from "@/utils/format-utils"

import PlayBarLeft from "./component/play-bar-left/index"
import PlayBarCenter from './component/play-bar-center'
import PlayBarRigth from './component/play-bar-rigth'
import PlayListLyc from './component/play-list-lyc';
import {PlayBarStyle} from "./style"

const PlayBar = memo(() => {
  // state
  const [isScrolling,setIsScrolling] = useState(false)
  const audioRef = useRef(null)
  const playBarLeftRef = useRef(null)
  const [isFirstMount, setIsFirstMount] = useState(true)
  const [isLocked,setIsLocked] = useState(false)
  const [isShowPlayListLyc,setIsShowPlayListLyc] = useState(false)

  // redux
  const {currentSong,currentTime} = useSelector((state) => ({
    currentSong:state.playBarData.currentSong,
    currentTime:state.playBarData.currentTime
  }),shallowEqual)
  const dispatch = useDispatch()

  // hooks
  useEffect(() => {
    if(isFirstMount) {
      const songList = JSON.parse(localStorage.getItem('playList'))
      if(songList && songList.length) {
        dispatch(AsyncgetSongDetail(currentSong.id))
      } else {
        // 默认歌曲——————鼓楼
        dispatch(AsyncgetSongDetail(447926067))
      }
      setIsFirstMount(false)
    }
  },[dispatch,isFirstMount,currentSong.id])

  useEffect(() => {
    // 播放完毕后自动播放下一曲
    audioRef.current.addEventListener('ended',() => {
      dispatch(changeCurrentIndexAction("auto"))
      // 主要是解决只有一首歌时，播放结束后还是放这一首，songid没变，不会触发下面的自动播放，需要自己手动触发一下
      audioRef.current.currentTime = 0
      audioRef.current.play()
    })
  },[dispatch])

  useEffect(() => {
    // 换歌后自动播放
    audioRef.current.src = getPalySong(currentSong.id)
    dispatch(changeCurrentTimeAction(0))
    playBarLeftRef.current.refSetPlaying()
    audioRef.current.play()
  },[currentSong,dispatch])

  // other hooks
  // 播放音乐
  const playMusic = useCallback(() => {
    audioRef.current.play()
  },[])

  // 停止播放音乐
  const stopMusic = useCallback(() => {
    audioRef.current.pause()
  },[])
  // 直接改变滑块位置（直接点击进度条）
  const sliderChange = useCallback((value) => {
    setIsScrolling(false)
    let changAfterTime = currentSong.duration * value / (100 * 1000)
    dispatch(changeCurrentTimeAction(changAfterTime))
    audioRef.current.currentTime = changAfterTime
    playBarLeftRef.current.refPlayMusic()
  },[currentSong,dispatch])
  // 拖动改变滑块位置
  const sliderChangeing = useCallback((value) => {
    setIsScrolling(true)
    let changAfterTime = currentSong.duration * value / (100 * 1000)
    dispatch(changeCurrentTimeAction(changAfterTime))
  },[currentSong,dispatch])

  // 其他逻辑
  // 监听播放时间
  const updataCurrentTime = () => {
    if(!isScrolling) {
      dispatch(changeCurrentTimeAction(audioRef.current.currentTime))
    }
  }

  // 切换歌词列表是否展示
  const changeIsShowPlayListLyc = useCallback(() => {
    setIsShowPlayListLyc(!isShowPlayListLyc)
  },[isShowPlayListLyc])

  // 关闭歌词列表
  const chosePlayListLyc = useCallback(() => {
    setIsShowPlayListLyc(false)
  },[])

  return (
    <PlayBarStyle className={`sprite_playbar ${!isLocked?'noLocked':'Locked'}`}>
      <div onClick={ e => setIsLocked(!isLocked)} className='left-lock sprite_playbar'>
        {
          isLocked?
          <div className='icon-locked sprite_playbar'></div>:
          <div className='icon-lock sprite_playbar'></div>
        }
      </div>
      <div className='paly-center wrap-v2'>
        <div className='left'>
          <PlayBarLeft
            ref={playBarLeftRef}
            playMusic={playMusic}
            stopMusic={stopMusic}/>
        </div>
        <div className='center'>
          <PlayBarCenter
            currentTime={currentTime}
            currentSong={currentSong}
            sliderChange={sliderChange}
            sliderChangeing={sliderChangeing}
          />

        </div>
        <div className='rigth'>
          <PlayBarRigth changeIsShowPlayListLyc={changeIsShowPlayListLyc}/>
        </div>
      </div>
      <audio ref={audioRef}
             onTimeUpdate={updataCurrentTime}
             currenttime={currentTime}
      />
      {
        isShowPlayListLyc?<PlayListLyc chosePlayListLyc={chosePlayListLyc} />:null
      }

    </PlayBarStyle>
  )
})

export default PlayBar
