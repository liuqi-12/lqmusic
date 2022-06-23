import styled from "styled-components"

const PlayListLycStyle = styled.div`
  color: #989898;
  width: 982px;
  height: 301px;
  background-color: #ccc;
  position: absolute;
  top: -281px;
  left: 50%;
  transform: translateX(-50%);
  .icon {
    cursor: pointer;
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
  .PlayListLyc {
    width: 100%;
    height: 41px;
    display: flex;
    background:url(${require("@/assets/img/playpanel_bg.png")}) no-repeat -2px 0;
    .hd-left {
      width: 553px;
      display: flex;
      justify-content: space-between;
      justify-items: center;
      .left-title {
        color: #e2e2e2;
        height: 39px;
        line-height: 39px;
        font-size: 14px;
        margin-left: 25px;
      }
      .letf-option {
        display: flex;
        align-items: center;
        margin-right: 12px;
        .add,.delete {
          display: flex;
          align-items: center;
          span {
            height: 16px;
            line-height: 16px;
          }
        }
        .delete {
          margin-left: 20px;
        }
        .icon-add {
          background-position: -24px 0px;
          &:hover{
            background-position: -24px -20px;
          }
        }
        .icon-delete {
          background-position: -48px 0px;
          &:hover{
            background-position: -48px -20px;
          }
        }
      }
    }
    .hd-rigth {
      flex: 1;
      display: flex;
      justify-content: center;
      .icon-clsoe{
        position: absolute;
        right: 12px;
        top: 12px;
        background-position: -200px 2px;
      }
      .song-name {
        color: #e2e2e2;
        height: 39px;
        line-height: 39px;
        font-size: 14px;
      }
    }
  }
`

const PlayListLycMainStyle = styled.div`
  display: flex;
  height: 260px;
  background: #121212;
  .song-list{
    width: 553px;
    overflow: auto;
    .active-song {
      color: #ffffff;
        .icon-sanjaio {
          background-position: -175px 2px;
        }
      }
    .song-item{
      display: flex;
      height: 28px;
      line-height: 28px;
      align-items: center;
      span {
        padding-right: 8px;
      }
      .song-name {
        flex: 1;
      }
      .songer {
        display: inline-block;
        width: 80px;
      }

      .icon-sanjaio {
        padding: 0 5px;
        margin-right: 12px;
      }
      .icon-delete {
        margin-left: 24px;
        background-position: -48px 0px;
          &:hover{
            background-position: -48px -20px;
        }
      }
      .icon-link {
        background-position: -80px 0px;
          &:hover{
            background-position: -80px -20px;
        }
      }
    }
  }
  .fenge {
    width: 6px;
    background-color: black;
  }
  .song-lyc {
    flex: 1;
  }
`

export {
  PlayListLycStyle,
  PlayListLycMainStyle
}
