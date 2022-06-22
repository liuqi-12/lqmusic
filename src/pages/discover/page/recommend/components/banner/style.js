import styled from "styled-components";

const TopBannerStyle = styled.div`
  height: 285px;
  position: relative;
  .ant-image {
      width: 100%;
    }
    .banner-bg {
      height: 285px;
      object-fit:cover
    }
    .banner-bg-cover {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(255,255,255,0.3);
      backdrop-filter: blur(20px)
    }
  .top-banner {
    display: flex;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    .banner {
      flex: 1;
      height: 284px;
      overflow: hidden;
    }
    .download-logo {
      width: 254px;
      background: url(${require('@/assets/img/download.png')}) no-repeat 0 0;
      .download-btn {
        width:215px;
        height: 56px;
        margin: 186px 0 0 19px;
        cursor: pointer;
      }
      .download-type {
        margin: 10px auto;
        text-align: center;
        color: #8d8d8d;
      }
    }
    .pre,.next {
      width: 37px;
      height: 63px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .pre {
      background: url(${require('@/assets/img/banner_sprite.png')}) no-repeat 0 -360px;
      left: -67px;
      &:hover {
        background: url(${require('@/assets/img/banner_sprite.png')}) no-repeat 0 -430px;
      }
    }
    .next {
      background: url(${require('@/assets/img/banner_sprite.png')}) no-repeat 0 -510px;
      right: -67px;
      &:hover {
        background: url(${require('@/assets/img/banner_sprite.png')}) no-repeat 0 -580px;
      }
    }
  }
`

export {
  TopBannerStyle
}