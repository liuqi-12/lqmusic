import styled from 'styled-components'

const ThemeHeaderRcmStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #C10D0C;
  height: 35px;
  padding: 0 10px 0 34px;
  background: url(${require('@/assets/img/sprite_02.png')}) no-repeat -225px -155px  ;
  .header-left {
    display: flex;
    padding: 0 !important;
    .title{
      font-size: 20px;
      color: #333333;
    }
    .classify {
      padding-top: 2px;
      margin-left: 20px;
      display: flex;
      align-items: center;
      span{
        margin: 0 10px;
      }
    }
  }
  .header-rigth {
    padding-top: 2px;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 10px;
      background-position: 0 -238px;
    }
  }
`

export {ThemeHeaderRcmStyle}