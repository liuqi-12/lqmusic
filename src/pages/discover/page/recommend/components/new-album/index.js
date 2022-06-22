import React, { memo, useEffect, useMemo, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {AsyncgetNewAlbum} from "../../store/slice"
import {chunk} from "@/utils"

import {NewAlbumStyled} from "./style"
import SongCoverV2 from '@/components/song-cover-v2'
import { Carousel } from 'antd';

const NewAlbum = memo(() => {
  // state

  // rudex
  const {newAlbums} = useSelector((state) => ({
    newAlbums:state.recommendData.newAlbums
  }),shallowEqual)
  const dispatch = useDispatch()
  // hooks
  const carouselRef = useRef(null)

  useEffect(() => {
    dispatch(AsyncgetNewAlbum())
  },[dispatch])

  const chunkNewAlbums = useMemo(() => {
    return chunk(newAlbums,5)
  },[newAlbums])

  // 其他逻辑
  const preCarousel = () => {
    carouselRef.current.prev()
  }

  const nextCarousel = () => {
    carouselRef.current.next()
  }
  
  return (
    <NewAlbumStyled>
      <div className='carousel'>
        <div onClick={preCarousel} className='pre sprite_02'></div>
        <Carousel ref={carouselRef}>
          {
            chunkNewAlbums.map((c,index) => {
              return (
                <div className='carousel-item' key={index}>

                    {
                      c.map(n => <SongCoverV2 songInfo={n} key={n.id}/>)
                    }

                </div>
              )
            })
          }
        </Carousel>
        <div onClick={nextCarousel} className='next sprite_02'></div>
      </div> 
    </NewAlbumStyled>
  )
})

export default NewAlbum