import React from 'react'
import styled from "styled-components"
import pix from "../../assets/avatar.jpeg"
import { BsThreeDots, BsBookmark } from 'react-icons/bs'
import { FaComment} from "react-icons/fa";
import { AiFillHome, AiOutlineHeart  } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

const BuildMainScreen = () => {
  return (
    <Container>
      <TopBuild>
        <Hold>
          <Image src={pix} />
          <Name>Name</Name>
        </Hold>
      </TopBuild>
      <PostBuild>
        <Top>
          <Hold>
            <ImageProfile src={pix} />
            <ProfileHolder>name</ProfileHolder>
            <Profile>Original</Profile>
          </Hold>
          <DotIcon />
        </Top>
        <PostImage src={pix} />
        <Icons>
          <Hold>
            <LoveIcon />
            <CommentIcon />
            <SendIcon />
          </Hold>

          <SavedIcon />
        </Icons>
        <LikePost>
            <span>{0}</span> likes
        </LikePost>
        <Post>
            <span>name</span>
            <Content>What were takeaways from today's service?...</Content>
        </Post>
        <View>View All <span>{0}</span></View>
        <Comment>
            <span>name</span>
            <Content>What wer takeaways from today's service?..
                </Content>
        </Comment>
        <Time>Posted 3hours ago</Time>
        <PostInput>
            <PostIcon />
            <Input placeholder="Add a comment" />
            <Text>Post</Text>
        </PostInput>
      </PostBuild>
    </Container>
  );
}

export default BuildMainScreen

const Icons = styled.div`
`;
const View = styled.div`
color:lightgray;
margin:20px;

`;
const Comment = styled.div``

const Text = styled.div`

`;
const Input = styled.input`
outline:none;
border:0;
background: transparent;
flex:1;
::placeholder{
    font-family: Poppins;
    font-size: 18px;
}
`;
const PostInput = styled.div``;
const PostIcon = styled.img``;
const Time = styled.div`
color:silver;
text-transform: uppercase;
font-size: 12px;
margin-left: 20px;

`;
const Content = styled.div``;
const Post = styled.div`
margin:0 20px;
display:flex;
font-size: 18px;
span{
    margin-right: 5px;
    font-weight: 500;
    :hover{
        cursor: pointer;
        text-decoration: underline;
    }
}
`;
const LikePost = styled.div`
margin-left: 20px;
margin-top: 15px;
font-size: 20px;

`;
const SavedIcon = styled(BsBookmark)``;
const LoveIcon = styled(AiOutlineHeart)`
font-size: 30px;
transition: all 350ms;
color:gray;
margin-right: 20px;
:hover{
    cursor: pointer;
    color:silver;
}
`;
const CommentIcon = styled(FaComment)`
  font-size: 30px;
  transition: all 350ms;
  color: gray;
  margin-right: 20px;
  :hover {
    cursor: pointer;
    color: silver;
  }
`;
const SendIcon = styled(FiSend)`
  font-size: 30px;
  transition: all 350ms;
  color: gray;
  margin-right: 20px;
  :hover {
    cursor: pointer;
    color: silver;
  }
`;

const DotIcon= styled(BsThreeDots)`
font-size: 30px;
color:silver;
`
const PostBuild = styled.div`
margin:10px 0 ;

`
const Top = styled.div`
display:flex;
margin: 20px;
`
const ImageProfile = styled.img`
  width: 50px;
  height:50px;
  object-fit: cover;
  border-radius:50px;
  outline:4px solid purple;
  border:2px solid transparent;
  background-clip: content-box;
  margin-right:15px;
`;
const PostImage= styled.img`
width:100%;
height:500px;
object-fit: cover;
`
const ProfileHolder = styled.div`
  font-weight: 700;
`;
const Profile = styled.div``;

const Hold = styled.div`
display:flex;

`

const TopBuild = styled.div`
  /* width: 100%; */
  background-color: #fff;
  padding: 20px 0;
  padding-left: 20px;
  border-radius: 7px;
  display:flex;

`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 2px solid transparent;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.div`
 margin-top: 5px;
`;


const Container = styled.div`
  width: 100%;
  background-color: #fff;
`;