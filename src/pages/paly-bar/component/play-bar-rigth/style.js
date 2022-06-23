import styled from "styled-components"

const PlayBarRigthStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  .inco {
    width: 25px;
    height: 25px;
  }
  .share-add{
    display: flex;
    align-items: center;
    .icon-add {
      background-position: -90px -160px;
      &:hover{
        background-position: -90px -186px;
      }
    }
    .icon-share {
      background-position: -115px -160px;
      &:hover{
        background-position: -115px -186px;
      }
    }
  }
  .play-info {
    padding-left: 13px;
    display: flex;
    align-items: center;
    background-position: -147px -238px;
    .icon-shenyin {
      background-position: -3px -245px;
      &:hover{
        background-position: -33px -245px;
      }
    }
    .icon-xunhun{
      background-position: -3px -340px;
      &:hover{
        background-position: -33px -340px;
      }
    }
    .icon-danqu {
      background-position: -66px -340px;
      &:hover{
        background-position: -93px -340px;
      }
    }
    .icon-suiji {
      background-position: -66px -245px;
      &:hover{
        background-position: -93px -245px;
      }
    }
    .icon-song-list {
      position: relative;
      width: 59px;
      height: 25px;
      background-position: -42px -66px;
      &:hover{
        background-position: -42px -96px;
      }
      .songs-num {
        position: absolute;
        right: 10px;
        top: 7px;
        color: #666666;
      }
    }
  }

`

export {
  PlayBarRigthStyle
}
