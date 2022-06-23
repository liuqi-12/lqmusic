import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {formatTime} from "@/utils/format-utils"

import {PlayListLycStyle,PlayListLycMainStyle} from './style'


const PlayListLyc = memo((props) => {

  // redux
  const {currentSong,playList} = useSelector((state) => ({
    currentSong:state.playBarData.currentSong,
    playList:state.playBarData.playList
  }),shallowEqual)

  return (
    <PlayListLycStyle>
      <div className='PlayListLyc'>
        <div className='hd-left'>
          <span className='left-title'>播放列表({playList.length})</span>
          <div className='letf-option'>
            <div className='add'>
              <i className='icon icon-add sprite_playlist'></i>
              <span>收藏全部</span>
            </div>
            <div className='delete'>
              <i className='icon icon-delete sprite_playlist'></i>
              <span>删除</span>
            </div>
          </div>
        </div>
        <div className='hd-rigth'>
          <i onClick={e => props.chosePlayListLyc()} className='icon icon-clsoe sprite_playlist'></i>
          <span className='song-name'>{currentSong.name}</span>
        </div>
      </div>
      <PlayListLycMainStyle>
      <div className='song-list'>
      {
        playList.map(item => (
          <div key={item.id}  className={`song-item ${item.id === currentSong.id?'active-song':''}`}>
            <i className='icon icon-sanjaio sprite_playlist'></i>
            <span className='song-name'>{item.name}</span>
            <span className='songer'>{item.artists[0].name}</span>
            <span className='time'>{formatTime(item.duration)}</span>
            <i className='icon icon-delete sprite_playlist'></i>
            <i className='icon icon-link sprite_playlist'></i>
          </div>
          ))
        }
      </div>
      <div className='fenge'></div>
      <div className='song-lyc'>

        </div>
      </PlayListLycMainStyle>

    </PlayListLycStyle>
  )
})

export default PlayListLyc
