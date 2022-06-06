import React from 'react'
import styled from "styled-components"
import BuildMainScreen from "./BuildMainScreen"

import BuildSideScreen from "./BuildSideScreen"

const HomeScreen = () => {
  return (
    <Container>
      <Wrapper>
        <MainScreen>
          <BuildMainScreen />
        </MainScreen>
        <SideScreen>
          <BuildSideScreen />
        </SideScreen>
      </Wrapper>
    </Container>
  );
}

export default HomeScreen
const MainScreen = styled.div`
  /* display: flex; */
  width: 600px;
  display: flex; 
  justify-content: center;
  @media (max-width: 1000px) {
    width: 600px;
    display: flex;
    justify-content: center;
  }
`;
const SideScreen = styled.div`
  display: flex;
  width:400px;
  justify-content:flex-start;
  @media (max-width:1200px){
      display:none;
  }
`;

const Container = styled.div`
width:100%;
min-height: calc(100vh - 70px);
height:100%;
background: lightgray;
padding-top:70px;
display:flex;
justify-content:center;
`
const Wrapper = styled.div`
  width: 1000px;
  /* padding-top: 50px; */
  /* background-color: #fff; */
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
`;
