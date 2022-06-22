import styled from "styled-components"

const SearchResultStyle = styled.div`
  width: 240px;
  border: 1px solid #bebebe;
  border-radius: 4px;
  background: #fff;
  z-index: 99999;
  position: absolute;
  top: 60px;
  left: 80px;
  .result-header {
    height: 40px;
    line-height: 40px;
    color: #666666;
    border-bottom: 1px solid #e2e2e2;
    font-size: 12px;
    padding-left: 11px;
    cursor: pointer;
  }
  .result {
    display: flex;
    .result-left {
      width: 63px;
      padding: 10px 0 0 10px;
      i{
        display: inline-block;
        width: 14px;
        height: 15px;
        margin-right: 5px;
        position: relative;
        top: 2px;
      }
      .songs {
        background-position:-35px -300px;
      }
      .albums {
        background-position:-35px -319px;
      }
      .artists {
        background-position:-50px -300px;
      }
      .playlists {
        background-position:-50px -319px;
      }
    }
    .result-rigth {
      flex: 1;
      width: 174px;
      padding: 6px 0 5px 0;
      border-bottom: 1px solid #e2e2e2;
      border-left: 1px solid #e2e2e2;
      .result-item {
        height: 24px;
        line-height: 24px;
        padding-left: 16px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        cursor: pointer;
        &:hover {
          background-color: rgba(0,0,0,0.2);
        }
      }
    }
  }

  .result:nth-child(odd) {
    .result-rigth {
      background-color: #f9f8f8;
    }
  }
`

export {
  SearchResultStyle
}
