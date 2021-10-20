import styled from "styled-components";
export const Container = styled.div`
  .slick-arrow {
    color: #ffff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 2;
  }
  .slick-arrow:hover {
    color: #ffff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    z-index: 2;
  }

  .ant-carousel .slick-dots {
    display: none !important;
  }
  @media screen and (max-width:768px){
    .slick-arrow {
      width: 40px;
    }
  }
`;
