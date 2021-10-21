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


  .ButtonContainer {
    display: flex;
    justify-content: center;
    button { 
      margin: 20px
    }
  }

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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: auto;
  li {
    display: flex;

    width: 150px;
    height: 100%;
    margin: 10px;
    text-align: center;
   
  }
  p{
    max-width: 15ch;
    width: 100px;
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


export const DescriptionContainer = styled.div`
  background: #364d79;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  list-style-type: none;
  p {
    margin: 10px;
  }
  button{
    position: relative;
    left: 88%;

  }

  @media (max-width: 700px) {
    button {
      position: static;
      display: flex;
      margin-left: auto;
      width: 45px;
    }
  }
  
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

