import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import {AsyncgetSongDetail} from "@/pages/paly-bar/store/slice"

import {SearchResultStyle} from "./style"

const searchMap = {
  "songs":'单曲',
  "albums":"专辑",
  "artists":'歌手',
  "playlists":'歌单'
}

const SearchResult = memo((props) => {

  const {order} = props.searchSuggestInfo

  const dispatch = useDispatch()

  const playMusic = (id) => {
    dispatch(AsyncgetSongDetail(id))
    props.clickItem()
  }

  const showItemContent = (type,content) => {
    let str = ''
    switch (type) {
      case 'songs':
        str = content.name + "-" + content.artists[0].name
        break;
      case 'albums':
        str = content.name+ "-" + content.artist.name
        break;
      case 'artists':
        str = content.name
        break;
      case 'playlists':
        str = content.name
        break;
      default:
        break;
    }
    return str
  }

  return (
    <SearchResultStyle>
      <div className='result-header'>
        {`搜"${props.keyWord}"相关用户>`}
      </div>
      {
        order.map(item => {
          return (
            <div className='result result-songs' key={item}>
              <div className='result-left'>
                <i className={`icon sprite_icon2 ${item}`}></i>
                <span>{searchMap[item]}</span>
              </div>
              <div className='result-rigth'>
                {
                  props.searchSuggestInfo[item].map(sr => {
                    return (
                      <div
                       onClick={e => playMusic(sr.id)}
                       className='result-item' key={sr.id}>
                        {
                          showItemContent(item,sr)
                        }
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </SearchResultStyle>
  )
})

export default SearchResult
