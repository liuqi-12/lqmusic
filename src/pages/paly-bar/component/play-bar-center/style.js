import styled from "styled-components"

const PlayBarCenterStyle = styled.div`
  display: flex;
  .songer-img{
        border-radius: 5px;
        margin-right: 15px;
        position: relative;
        .cover {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-position: 0 -80px;
        }
        img {
          width: 35px;
          height: 35px;
        }
      }
      .song-name-silder{
        display: flex;
        justify-content: center;
        flex-direction: column;
        .song-info {
          display: flex;
          .song-name{
            font-size: 12px;
            color: #e1e1e1;
          }
          .singer{
            font-size: 12px;
            color: #a1a1a1;
            margin-left: 10px;
          }
          .link-icon {
            width: 14px;
            height: 15px;
            background-position: -110px -101px;
            margin-left: 10px;
            cursor: pointer;
            &:hover{
              background-position: -130px -101px;
            }
          }
        }
        .slider {
          padding-bottom: 4px;
          display: flex;
          .time-info {
            margin-left: 20px;
            font-size: 12px;
            display: flex;
            .current-time {
              color: #a1a1a1;
            }
            .total-time {
              color: #797979;
            }
          }
          .ant-slider {
            width: 493px;
            margin: unset;
            flex: 1;
            .ant-slider-rail {
              height: 9px;
              background: url(${require("@/assets/img/progress_bar.png")}) no-repeat 0 0;
            }
            .ant-slider-track {
              height: 9px;
              background: url(${require("@/assets/img/progress_bar.png")}) no-repeat 0 -65px;
            }
            .ant-slider-handle {
              width: 22px;
              height: 24px;
              border: unset;
              background: url(${require("@/assets/img/sprite_icon.png")}) no-repeat 0 -281px;
            }
          }
        }
      }
`
export {
  PlayBarCenterStyle
}
