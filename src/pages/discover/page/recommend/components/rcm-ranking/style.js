import styled from "styled-components"

const RcmRankingStyle = styled.div`
  width: 100%;
  height: 472px;
  margin-top: 20px;
  border-right: 1px solid #d3d3d3;
  display: flex;
  background: url(${require('@/assets/img/recommend-top-bg.png')}) no-repeat 0 0;
  .rank-item {
    flex: 1;
  }
`

export {
  RcmRankingStyle
}

