import styled from "styled-components";

const DiscoverStyle = styled.div`
  .header-content {
    position: relative;
    background-color: #C20C0C;
    height: 30px;
    .header {
      position: relative;
      left: 180px;
      top: -4px;
      .discover-muen {
          font-size: 12px;
          display: inline-block;
          margin: 7px 17px 0;
          border-radius: 20px;
          line-height: 21px;
          span {
            display: inline-block;
            height: 20px;
            line-height: 20px;
            padding: 0 13px;
            color: white;
            &:hover{
              background-color: #9b0909;
              border-radius: 20px;
            }
          }
      }
      .active {
            background-color: #9b0909;
            border-radius: 20px;
          }
    }
  }

`

export {
  DiscoverStyle
}