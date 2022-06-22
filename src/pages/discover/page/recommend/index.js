import React, { memo, useMemo } from 'react'

import TopBanner from "./components/banner/index"
import {RecommendStyle} from "./style"
import ThemeHeaderRcm from '@/components/theme-header-rcm'
import HotRecommend from './components/hot-recommend'
import NewAlbum from './components/new-album'
import RcmRanking from './components/rcm-ranking'

const recommend = memo(() => {
  // hooks
  const rmcList = useMemo(() => ['华语','流行','摇滚','民谣','电子'],[])

  return (
    <RecommendStyle>
      <TopBanner />
      <div className='content wrap-v2'>
        <div className='left'>
          <ThemeHeaderRcm list={rmcList} title={'热门推荐'}/>
          <HotRecommend/>
          <div className='blank'></div>
          <ThemeHeaderRcm title={'新碟上架'}/>
          <NewAlbum/>
          <ThemeHeaderRcm title={'榜单'}/>
          <RcmRanking/>
        </div>
        <div className='rigth'></div>
      </div>
    </RecommendStyle>
  )
})



export default recommend