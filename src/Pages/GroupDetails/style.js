import styled from "styled-components";

export const Container = styled.main`
  background-color: #98c1d9;
  width: 80%;
  height: fit-content;
  min-height: 500px;
  margin: 50px auto;
  border-radius: 15px;
  padding: 10px;
  box-sizing: border-box;
  
  h2 {
    color: #fff;
    text-align: center;
    margin: 10px;
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
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
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

export const CreateSomething = styled.button`
  background-color: #FF715B;
  width: 200px;
  color: white;
  display: block;
  margin: 0 auto;
  margin-bottom:10px ;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  span{
    background-color: #98C1D9;
    border-radius: 50%;
    text-align: center;
    
  }
`
