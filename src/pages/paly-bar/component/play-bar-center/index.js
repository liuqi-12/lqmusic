import React, { memo, useCallback, useEffect, useState} from 'react'

import {formatTime} from "@/utils/format-utils"

import { Slider } from 'antd';
import {PlayBarCenterStyle} from "./style"


const PlayBarCenter = memo((props) => {
  const { currentTime ,currentSong,sliderChange,sliderChangeing} = props
  const [slideValue,setSliderValue] = useState(0)

  useEffect(() => {
    setSliderValue((currentTime*1000/currentSong.duration)*100)
  },[currentTime,currentSong])

  const changeSlide = useCallback((value) => {
    setSliderValue(value)
    sliderChange(value)
  },[sliderChange])

  const srcollSlide = useCallback(value => {
    setSliderValue(value)
    sliderChangeing(value)
  },[sliderChangeing])

  return (
    <>
      {
        currentSong.id?
        <PlayBarCenterStyle>
          <div className='songer-img'>
            <div className='cover sprite_playbar'></div>
            <img src={currentSong?.album.picUrl} alt="" />
          </div>
            <div className='song-name-silder'>
              <div className='song-info'>
                <div className='song-name'>{currentSong.name}</div>
                <div className='singer'>{currentSong.artists[0]?.name}</div>
                <div className='link-icon sprite_playbar'></div>
              </div>
              <div className='slider'>
                <Slider value={slideValue}
                        onAfterChange={changeSlide}
                        onChange = {srcollSlide}
                />
                <div className='time-info'>
                  <div className='current-time'>{formatTime(currentTime*1000)}</div>
                <div className='total-time'>/ {formatTime(currentSong.duration)}</div>
              </div>
            </div>
          </div>
        </PlayBarCenterStyle>:''
      }
    </>
  )
})

export default PlayBarCenter
