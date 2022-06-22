import React, { memo } from 'react'
import propTypes from "prop-types";

import { formattPlayCount } from '@/utils';

import {SongCoverV1Style} from './style'

const SongCoverV1 = memo((props) => {
  const {size,songInfo} = props
  return (
    <SongCoverV1Style size={size} bgImg={songInfo.picUrl}>
      <div className='song-image'>
        <div className='play'>
          <div className='play-count'>
            <i className='listen-icon sprite_icon'></i>
            <span>{formattPlayCount(songInfo.playCount)}</span>
          </div>
          <div className='play-icon sprite_icon'></div>
        </div>
      </div>
      <div className='song-name'>{songInfo.name}</div>
    </SongCoverV1Style>
  )
})

SongCoverV1.propTypes = {
  size: propTypes.string,
  songInfo: propTypes.object.isRequired
};

SongCoverV1.defaultProps = {
  size: "140px",
  songInfo: {},
};

export default SongCoverV1
