import styled from "styled-components";
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: space-around;
  h2 {
    color: #fff;
    text-transform: capitalize;
    margin-top: 10px;
    margin: 0 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 180px;
    margin: 0;
    font-size: 20px;
  }
  p{
    font-size: 17px;
  }
  
  .progressBarDesktop {
    display: none;
  }
  @media screen and (max-width:768px){
    flex-direction: column;
    justify-content: space-around;
    h2{
      width: 140px;
    }
  }
  
`;
