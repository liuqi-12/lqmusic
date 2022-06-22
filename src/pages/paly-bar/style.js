import styled from "styled-components";

const PlayBarStyle = styled.div`
  &.Locked{
    bottom: 0;
  }
  &.noLocked:hover {
    bottom: 0;
  }
  height: 67px;
  position: fixed;
  bottom: -47px;
  left: 0;
  right: 0;
  transition: .5s;
  background-repeat: repeat-x;
  background-position: 0 14px;
  .left-lock {
    width: 52px;
    height: 67px;
    position: absolute;
    top: 0px;
    right: 20px;
    background-position: 0 -380px;
    .icon-lock,.icon-locked {
      cursor: pointer;
      width: 18px;
      height: 18px;
      position: absolute;
      left: 17px;
      top: 7px;
    }
    .icon-lock {
      background-position: -81px -382px;
      &:hover{
        background-position: -81px -402px;
      }
    }
    .icon-locked {
      background-position: -100px -382px;
      &:hover{
        background-position: -100px -402px;
      }
    }
  }
  .paly-center {
    height: 47px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    .center{
      width: 630px;
      display: flex;
      align-items: center;
    }
    .rigth{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
    }
  }
`

export{
  PlayBarStyle
}
