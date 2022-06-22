import React, { memo } from 'react'
import propTypes from "prop-types";

import {SongCoverV2Style} from "./style"

const SongCoverV2 = memo((props) => {
  const {songInfo} = props
  return (
    <SongCoverV2Style>
      <div className='bg-image'>
        <div className='bg-image-url sprite_covor'></div>
        <img src={songInfo.picUrl} alt="" />
        <div className='play-icon sprite_icon'></div>
      </div>
      <div className='bg-reflect sprite_02'></div>
      <div className='song-info'>
        <div className='song-name'>
          {songInfo.name}
        </div>
        <div className='singer-name'>
          {songInfo.artist.name}
        </div>
      </div>
    </SongCoverV2Style>
  )
})

SongCoverV2.propTypes = {
  songInfo: propTypes.object.isRequired
};

SongCoverV2.defaultProps = {
  songInfo: {},
};

export default SongCoverV2