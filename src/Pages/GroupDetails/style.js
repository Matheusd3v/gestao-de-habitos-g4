import styled from "styled-components";

export const Container = styled.main`
  background-color: #98c1d9;
  width: 65%;
  max-width: 1000px;
  height: fit-content;
  min-height: 500px;
  margin: 50px auto;
  border-radius: 15px;
  padding: 10px 50px;
  padding-bottom: 40px;
  box-sizing: border-box;
  h2 {
    color: #fff;
    text-align: center;
    margin: 10px;
  }

  @media screen and (max-width: 800px) {
    width: 80%;
    padding: 10px 20px;
  }
`;
export const GroupTitle = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 42px;
`;
export const CarrouselItem = styled.div`
  height: 160px;
  border-radius: 10px;
  color: #fff;
  background: #364d79;
  text-align: center;
`;
export const ActivitiesList = styled.ul`
  background: #364d79;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  list-style-type: none;
  height: 146px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  li {
    margin: 10px;
    text-align: center;
    max-width: 15ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const GroupCategory = styled.div`
  width: fit-content;
  margin: 0 auto;
  background-color: #ff715b;
  color: white;
  font-size: 24px;
  border: none;
  width: 250px;
  border-radius: 10px;
  padding: 15px;
  cursor: pointer;
  transition: 0.5s;
  text-align: center;
`;

export const MemberList = styled.div`
    width: 100%;
    height: fit-content;
    background: #364d79;
    color: #ffffff;
    border-radius: 10px;
    padding: 5px 0;
    box-sizing: border-box;
    
    ul {
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: wrap;
      min-height: 100px;
      padding: 15px 40px;
      box-sizing: border-box;
    }

    li {
      margin: 2px 10px;
    }
`