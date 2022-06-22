import styled from "styled-components";

const AppHeaderStyle = styled.div`
  background-color: #242424;
  height: 75px;
  border-bottom: 5px solid #c20c0c;
  .app-header {
    height: 100%;
    display: flex;
    .app-header-logo{
      width: 176px;
      overflow: hidden;
    }
    .app-header-muen{
      width: 508px;
      display: flex;
      align-items: center;
      a{
        position: relative;
        display: inline-block;
        height: 100%;
        line-height: 70px;
        padding: 0 19px;
        font-size: 14px;
        color: #cccccc;
        &:hover {
          text-decoration: unset;
          cursor: pointer;
          color: #fff;
          background: #000;

        }
      }
      .last_a::after {
        position: absolute;
        top: 10px;
        width: 28px;
        height: 20px;
        border-radius: 19px 19px;
        content: "";
        background: url(${require("@/assets/img/sprite_01.png")}) no-repeat -191px 5px;
      }
      .active {
        color: #fff;
        background: #000;
        .sanjiao {
          position: absolute;
          bottom: -9px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px;
          height: 20px;
          background: url(${require("@/assets/img/sprite_01.png")}) no-repeat -220px 5px;
        }
      }
    }
    .app-header-operation {
      position: relative;
      display: flex;
      flex: 1;
      justify-content: flex-end;
      align-items: center;
      .ant-input-affix-wrapper {
        width: 158px;
        height: 32px;
        border-radius: 32px;
        background-color: #fff;
        padding: 3px;
      }
      .creater-center {
        width: 90px;
        height: 32px;
        line-height: 32px;
        cursor: pointer;
        text-align: center;
        color: #cccccc;
        background-color:#333333 ;
        border-radius: 20px;
        border: 1px solid #4F4F4F;
        margin-left: 19px;
        &:hover{
          color: #fff;
          border: 1px solid #ccc;
        }
      }
      .login {
        width: 28px;
        height: 32px;
        line-height: 32px;
        color:#787878;
        cursor: pointer;
        margin-left:19px;
        padding-right:22px;
        box-sizing: content-box;
        &:hover{
          color: #cccccc
        }
      }
    }
  }
`

export {
  AppHeaderStyle
}
