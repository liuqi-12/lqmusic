import styled from "styled-components"

const PlayBarLeftStyle = styled.div`
      height: 100%;
      display: flex;
      align-items: center;
      width: 137px;
        .pre{
          width: 28px;
          height: 28px;
          margin-right: 8px;
          background-position: -1px -130px;
          &:hover{
            background-position: -31px -130px;
          }
        }
        .stop {
          width: 36px;
          height: 36px;
          margin-right: 8px;
          background-position: -1px -204px;
          &:hover{
            background-position: -41px -204px;
          }
        }
        .play {
          width: 36px;
          height: 36px;
          margin-right: 8px;
          background-position: -1px -165px;
          &:hover{
            background-position: -41px -165px;
          }
        }
        .next {
          width: 28px;
          height: 28px;
          margin-right: 8px;
          background-position: -81px -130px;
          &:hover{
            background-position: -111px -130px;
          }
        }
`

export {
  PlayBarLeftStyle
}
