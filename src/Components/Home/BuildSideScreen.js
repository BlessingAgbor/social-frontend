import React, {useState} from "react";
import styled from "styled-components";
import pix from "../../assets/avatar.jpeg";
import Display from "./DisplayCard"


const BuildSideScreen = () => {
  const [display, setDisplay]= useState(false)
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Image src={pix} />
          <Hold>
            <Name>name</Name>
            <Profile>profile</Profile>
          </Hold>
        </Holder>

        <Text>
          <Suggest>Suggestions For You</Suggest>
          <Action>See All</Action>
        </Text>

        <Text>
          <Holder>
            <Image1 src={pix} />
            <Hold>
              <RealName
                onMouseEnter={() => {
                  setDisplay(true);
                }}
                onMouseLeave={() => {
                  setDisplay(false);
                }}
              >
                name
              </RealName>
              <Profile>profile</Profile>
              {display? (
                <Div>
                  <Display setDisplay={setDisplay} />
                </Div>
              ): null}
            </Hold>
          </Holder>

          <Content>Follow</Content>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default BuildSideScreen;
const Div = styled.div`
position: absolute;
top:-3px;
`
const RealName = styled.div`
  font-size: 12px;
  font-weight: 700;
  z-index: 10;
  position: relative;

  :after {
    content: "";
    height: 2px;
    background-color: purple;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    opacity: 0;
    transition: all 350ms;
  }
  :hover {
    cursor: pointer;

    :after {
      opacity: 1;
      transition: all 350ms;
    }
  }
`;

const Image1 = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Content = styled.div`
  cursor: pointer;
  color: #69bff8;
`;

const Action = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 900;
`;

const Suggest = styled.div`
  font-weight: 700;
  font-size: 19px;
  color: gray;
  cursor: pointer;
`;
const Text = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Profile = styled.div``;
const Name = styled.div`
  font-weight: 700;
`;
const Hold = styled.div`
position:relative;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const Wrapper = styled.div`
  margin-left: 50px;
  width: 400px;
`;
const Container = styled.div`
  width: 100%;
  position: fixed;
`;
