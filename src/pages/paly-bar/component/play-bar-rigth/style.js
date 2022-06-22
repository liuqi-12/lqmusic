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
      background-position: -90px -165px;
      &:hover{
        background-position: -90px -191px;
      }
    }
    .icon-share {
      background-position: -115px -165px;
      &:hover{
        background-position: -115px -191px;
      }
    }
  }
  .play-info {
    padding-left: 13px;
    display: flex;
    align-items: center;
    background-position: -147px -238px;
    .icon-shenyin {
      background-position: -3px -248px;
      &:hover{
        background-position: -33px -248px;
      }
    }
    .icon-xunhun{
      background-position: -3px -345px;
      &:hover{
        background-position: -33px -345px;
      }
    }
    .icon-danqu {
      background-position: -66px -343px;
      &:hover{
        background-position: -93px -343px;
      }
    }
    .icon-suiji {
      background-position: -66px -248px;
      &:hover{
        background-position: -93px -248px;
      }
    }
    .icon-song-list {
      width: 59px;
      height: 25px;
      background-position: -42px -70px;
      &:hover{
        background-position: -42px -100px;
      }
    }
  }

`

export {
  PlayBarRigthStyle
}
