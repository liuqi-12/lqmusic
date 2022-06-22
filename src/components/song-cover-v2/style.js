import styled from "styled-components"

const SongCoverV2Style = styled.div`
  width: 118px;
  .bg-image {
    position: relative;
    .bg-image-url {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-position: 0 -570px;
      cursor: pointer;
      &:hover ~ .play-icon {
        display: block !important;
      }
    }
    img {
      width: 100px;
      height: 100px;
    }
    .play-icon {
      display: none;
      width: 22px;
      height: 22px;
      position: absolute;
      right: 16px;
      bottom: 4px;
      background-position: 0 0;
    }
  }
  .bg-reflect {
      width: 100%;
      height:10px ;
      background-position: -260px 0px;
    }
  .song-name,.singer-name {
    font-size: 12px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    height: 18px;
    line-height: 18px;
  }
  .song-name {
    color: #000000;
  }
  .singer-name {
    color: #666666;
  }
`

export {
  SongCoverV2Style
}