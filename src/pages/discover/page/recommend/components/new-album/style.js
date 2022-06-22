import styled from "styled-components"

const NewAlbumStyled = styled.div`
  width: 100%;
  height:186px;
  background: #f5f5f5;
  border: 1px solid #d3d3d3;
  margin: 20px 0 37px 0;
  .carousel {
    position: relative;
    .pre,.next {
      width: 17px;
      height: 17px;
      position: absolute;
      top: 50px;
      cursor: pointer;
    }
    .pre {
      left: 6px;
      background-position: -262px -75px;
      &:hover{
        background-position: -282px -75px;
      }
    }
    .next {
      right: 6px;
      background-position: -302px -75px;
      &:hover{
        background-position: -322px -75px;
      }
    }
  }
  .ant-carousel {
    margin: 28px 27px 0 27px;
  }
  .carousel-item {
    display: flex !important;
    justify-content: space-between;
  }
`

export {
  NewAlbumStyled
}