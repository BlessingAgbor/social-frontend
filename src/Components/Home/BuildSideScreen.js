import React from 'react'
import styled from "styled-components"
const BuildSideScreen = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Image />
          <Hold>
            <Name>name</Name>
            <Profile>profile</Profile>
          </Hold>
        </Holder>
        <Text>
          <Suggest>Suggstions for you</Suggest>
          <Action>See All</Action>
        </Text>
        <Holder>
          
        </Holder>
      </Wrapper>
    </Container>
  );
}

export default BuildSideScreen;

const Suggest = styled.div``;

const Action = styled.div``;

const Text = styled.div``;

const Container = styled.div`
  width: 100%;
  background-color: red;
`;

const Wrapper = styled.div`
margin-left: 50px;

`
const Holder = styled.div``
const Hold = styled.div``
const Image = styled.img`
width:70px;
height:70px;
border-radius: 50%;
`
const Name = styled.div`

font-weight:700;
`;
const Profile = styled.div`

`;

