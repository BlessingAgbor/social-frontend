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
const MainScreen= styled.div`
/* display: flex; */

`
const SideScreen = styled.div`
  /* display: flex; */
  @media (max-width:1200px){
      display:none;
  }
`;

const Container = styled.div`
width:100%;
min-height: calc(100vh - 70px);
height:100%;
background: lightgray;
display:flex;
justify-content:center;
`
const Wrapper = styled.div`
  width: 1200px;
  padding-top:50px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
`;
