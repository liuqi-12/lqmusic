import React, { memo,useEffect,useState,useRef, useCallback } from 'react'
import { useSelector, useDispatch,shallowEqual} from 'react-redux'

import {TopBannerStyle} from './style'
import {AsyncgetTopBanners} from "@/pages/discover/page/recommend/store/slice"

import { Carousel,Image } from 'antd';

const TopBanner = memo(() => {
  // state
  // const [bannerList,setBannerlsit] = useState([])
  const [bannerBgUrl,setBannerBgUrl] = useState('')
  const carouselRef = useRef(null)

  // redux
  const dispatch = useDispatch()
  const {topBanners} = useSelector((state) => ({
    topBanners:state.recommendData.topBanners
  }),shallowEqual)

  // hooks
  useEffect(() => {
    setBannerBgUrl(topBanners[0]?.imageUrl)
  },[topBanners])

  useEffect(() => {
    dispatch(AsyncgetTopBanners())
    
  },[dispatch])

  // 其他逻辑

  // 切换Banner
  const preBanner = () => {
    carouselRef.current.prev()
  }

  const nextBanner = () => {
    carouselRef.current.next()
  }

  const onChangeBanner = useCallback((from,to) => {
    setBannerBgUrl(topBanners[to].imageUrl)
  },[topBanners])

  return (
    <TopBannerStyle >
      <Image preview={false} src={bannerBgUrl} className='banner-bg'></Image>
      <div className='banner-bg-cover'></div>
      <div className='top-banner wrap-v2'>
        <div className='banner'>
          <Carousel effect="fade" ref={carouselRef} autoplay beforeChange={onChangeBanner}>
            {
              topBanners.map(b => {
                return (
                  <Image 
                    preview={false}
                    height={284}  
                    key={b.imageUrl}  
                    src={b.imageUrl}/>
                )
              })
            }
          </Carousel>
        </div>
        <div className='download-logo'>
          <div className='download-btn'></div>
          <div className='download-type'>PC 安卓 iPhone WP iPad Mac 六大客户端</div>
        </div>
        <div onClick={preBanner} className='pre'></div>
        <div onClick={nextBanner} className='next'></div>
      </div>
    </TopBannerStyle>
  )
})

export default TopBanner