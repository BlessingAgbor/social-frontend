import React from "react"
import pix from "../../assets/avatar.jpeg";
import styled from "styled-components"

const DisplayCard = ({setDisplay})=>{
    return (
      <Container
        onMouseEnter={() => {
          setDisplay(true);
        }}
        onMouseLeave={() => {
          setDisplay(false);
        }}
      >
        <Wrapper>
          <Top>
            <Image src={pix} />
            <Holder>
              <Name>name</Name>
              <RealName>real name</RealName>
              <Follow>
                Followed by <span>Another name</span>
              </Follow>
            </Holder>
          </Top>
          <Middle>
            <CountHolder>
              <Count>{0}</Count>
              <Title>Following</Title>
            </CountHolder>
            <CountHolder>
              <Count>{0}</Count>
              <Title>Following</Title>
            </CountHolder>
            <CountHolder>
              <Count>{0}</Count>
              <Title>Following</Title>
            </CountHolder>
          </Middle>
          <Bottom>
            <Images src={pix} />
            <Images src={pix} />
            <Images src={pix} />
          </Bottom>
          <Button>Follow</Button>
        </Wrapper>
      </Container>
    );
}
export default DisplayCard
const Button = styled.div`
margin:10px 0;
background-color:#69bff8;
height:40px;
display: flex;
align-items:center;
justify-content:center;
color:#FFF;
border-radius: 3px;
margin-bottom: 20px;
font-weight:700;
font-size: 12px;
:hover {
    cursor:pointer;
}
`
const Images = styled.img`
width:116px;
height:116px;
object-fit: cover;
:hover{
    opacity:0.9
}
`
const Bottom = styled.div`
width:100%;
`
const Middle = styled.div`
height:50px;
border-top:1px solid silver;
border-bottom:1px solid silver;
padding: 10px 0;
display:flex;
justify-content:space-around;
align-items:center;
`;
const CountHolder = styled.div`
display: flex;
flex-direction: column;
align-items:center;
`;
const Count = styled.div`
font-weight: 700;
`;
const Title = styled.div`

text-transform:capitalize;
`;


const Follow = styled.div`
  color: gray;
`;
const RealName = styled.div`
font-size: 13px;
margin-bottom: 15px;
color:gray;
`
const Name = styled.div`
  color: blue;
`;
const Holder = styled.div``
const Image = styled.img`
width:50px;
object-fit: cover;
height:50px;
margin-right:20px;
border-radius: 50%;
`
const Top = styled.div`
  display: flex;
  margin: 20px;

  padding: 10px 0;
`;
const Wrapper = styled.div`
/* padding: 0 10px; */
`;
const Container = styled.div`
  width: 350px;
  z-index: 12;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border-radius: 5px;
`;

// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;
// const Container = styled.div``;

