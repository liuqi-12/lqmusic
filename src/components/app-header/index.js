import React, { memo, useCallback, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";
import classNames from 'classnames';

import {headerLinks} from '@/services/local-data'
import {getSearchSuggest} from "@/services/app"

import {AppHeaderStyle} from './style'
import { Input} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import SearchResult from './cpn/search-result';

// const {TextArea} = {Input}

const LQAppHeader = memo(() => {
  // state store
  const [keyWord,setKeyWord] = useState('')
  const [searchSuggestInfo,setSearchSuggestInfo] = useState({})
  const [isShowSearchResult,setIshowSearchResult] = useState(false)

  // hooks
  useEffect(() => {
    // 模拟 vue里的v-click-outside
    document.addEventListener('click',() => {
      setIshowSearchResult(false)
    })
  },[])

  const clickItem = useCallback(() => {
    setIshowSearchResult(false)
    setSearchSuggestInfo({})
    setKeyWord("")
  },[])

  // 其他逻辑
  const getSearchData = async (value) => {
    let res = await getSearchSuggest(value)
    setSearchSuggestInfo(res.result)
    if((JSON.stringify(res.result)) !== '{}') {
      setIshowSearchResult(true)
    } else {
      setIshowSearchResult(false)
    }
  }

  const seachSong = useCallback(async (e) => {
    setKeyWord(e.target.value)
    if(e.target.value !== "") {
      getSearchData(e.target.value)
    } else {
      setIshowSearchResult(false)
      setSearchSuggestInfo({})
    }
  },[])

  const showLinkItem = (link,index) => {
    if(index < 3) {
      return(
        <NavLink  className='muen' key={link.link} to={link.link}>
          <div className='sanjiao'></div>
          {link.title}
        </NavLink>
      )
    } else {
      return <a key={link.link} className={classNames({muen:true,last_a:index === 5})} href={link.link}>
        <div className='sanjiao'></div>
        {link.title}
        </a>
    }
  }

  return (
    <AppHeaderStyle>
      <div className='app-header wrap-v1'>
        <div className='app-header-logo sprite_01'></div>
        <div className='app-header-muen'>
          {
            headerLinks.map((link,index) => {
              return showLinkItem(link,index)
            })
          }
        </div>
        <div className='app-header-operation'>
          <Input
            value={keyWord}
            onChange={seachSong}
            prefix={<SearchOutlined />}
            placeholder="音乐/视频/电台/用户" />
          <div className='creater-center'>创作者中心</div>
          <div className='login'>登录</div>
          {
            isShowSearchResult ?
            <SearchResult
              clickItem={clickItem}
              keyWord={keyWord}
              searchSuggestInfo={searchSuggestInfo}/>:''
          }
        </div>
      </div>
    </AppHeaderStyle>
  )
})

export default LQAppHeader
