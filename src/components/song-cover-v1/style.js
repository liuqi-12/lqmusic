import styled from "styled-components"

const SongCoverV1Style = styled.div`
  margin-bottom: 30px;
  width:  ${(props) => props.size};
  background: url(${(props) => props.bgImg}) no-repeat 0 0 / ${(props) => props.size} ${(props) => props.size};
  .song-image {
    width: 100%;
    height: ${(props) => props.size};
    position: relative;
    cursor: pointer;
    background: url(${require('@/assets/img/sprite_cover.png')}) no-repeat;
    .play {
      width: 100%;
      position: absolute;
      bottom: 0;
      height: 27px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      color: #cccccc;
      background-color: rgba(0,0,0,0.5);
      .play-icon,.listen-icon{
        display: inline-block;
        width: 16px;
        height: 16px;
        margin-top: -4px;
      }
      .play-icon{
        background-position: 0 0;
      }
      .listen-icon {
        background-position: 0 -18px;
        margin-right: 5px;
      }
    }
  }
  .song-name {
    margin: 8px 0 13px 0;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;  // 控制多行的行数
    -webkit-box-orient: vertical;
    cursor: pointer;
  }
`

export {SongCoverV1Style}