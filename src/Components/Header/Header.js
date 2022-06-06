import React from 'react'
import styled from "styled-components"
import {BsSearch} from "react-icons/bs"
import { BiAddToQueue } from "react-icons/bi";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";


const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <Logo>Social Build</Logo>
          <SearchBar>
            <Icon />
            <SearchInput placeholder="Search" />
          </SearchBar>
        </Hold>
        <Hold>
          <HomeIcon />
          <PostIcon />
          <LoveIcon />
          <Image />
        </Hold>
      </Wrapper>
    </Container>
  );
}

export default Header

const HomeIcon = styled(AiFillHome)`
font-size: 30px;
margin:0 10px;
color:#000000;
cursor: pointer;
`
const PostIcon = styled(BiAddToQueue)`
font-size: 30px;
margin:0 10px;

`
const LoveIcon = styled(AiOutlineHeart)``;
const Image = styled.img`
width:50px;
height:50px;
object-fit: cover;
cursor: pointer;
border-radius: 50%;

`
const SearchInput = styled.input`
outline: none;
border:0;
background: transparent;
font-size: 20px;
::placeholder{
    font-family: Poppins;
}
`;
const SearchBar = styled.div`
display: flex;
align-items: center;
width: 350px;
height: 40px;
border-radius: 2px solid silver;
background-color: lightgray;
`
const Icon = styled(BsSearch)`
margin:0 10px;
font-size: 15px;
`
const Hold = styled.div`
display: flex;
height: 100%;
align-items: center;

`;

const Logo = styled.div`
margin-right: 40px;
font-weight: 500;
font-size: 25px;
font-style: italic;
`
const Wrapper = styled.div`
display:flex;
width:90%;
align-items: center;
height: 100%;
justify-content: space-between;
`
const Container = styled.div`
width:100%;
height:70px;
display:flex;
justify-content: center;
border-bottom:1px solid silver;
`;