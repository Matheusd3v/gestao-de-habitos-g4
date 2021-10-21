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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 180px;
    margin: 0;
    font-size: 20px;
    text-align: center;
  }

  p{
    font-size: 17px;
  }
  
  .progressBarDesktop {
    display: none;
  }
  @media screen and (max-width:500px){
    flex-direction: column;
    justify-content: space-around;

    h2{
      width: 140px;
    }
  }
  
`;
