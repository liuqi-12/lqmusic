import styled from "styled-components";

const RecommendStyle = styled.div`
  .content {
    display: flex;
    border: 1px solid #d3d3d3;
    background-color: white;
    .left{
      overflow: hidden;
      flex: 1;
      padding: 20px 20px 40px;
    }
    .rigth{
      width: 250px;
      border-left: 1px solid #d3d3d3;
    }
    .blank {
      height: 35px;
    }
  }
`

export {
  RecommendStyle
}