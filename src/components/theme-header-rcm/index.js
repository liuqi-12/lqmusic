import React, { memo } from 'react'
import propTypes from "prop-types";

import {ThemeHeaderRcmStyle} from './style'

const ThemeHeaderRcm = memo((props) => {
  const {title,list} = props
  return (
    <ThemeHeaderRcmStyle>
      <div className='header-left'>
        <span className='title'>{title}</span>
        <div className='classify'>
          {
            list.map((item,index) => {
              return (
                <div key={item}>
                  <a href="todo">{item}</a>
                  {index+1  === list.length ? '' :<span>|</span>}
                </div>
              )
            })
          }
        </div>
        
      </div>
      <div className='header-rigth'>
        <a href="todo">更多</a>
        <i className='icon sprite_02'></i>
      </div>
    </ThemeHeaderRcmStyle>
  )
})

ThemeHeaderRcm.propTypes = {
  title: propTypes.string.isRequired,
  list: propTypes.array
};

ThemeHeaderRcm.defaultProps = {
  title: "",
  list: [],
};
export default ThemeHeaderRcm