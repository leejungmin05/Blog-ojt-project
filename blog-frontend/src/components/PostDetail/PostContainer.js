import React ,{useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import Profile from "../Home/Profile";
import PostViewer from "./PostViewer";
import HorizontalLine from "../Home/HorizontalLine";
import Comment from "./Comment";
import styled from "styled-components";
import axios from 'axios';

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 128px;
  width: 768px;
  margin-left: auto;
  margin-right: auto;
`;

const PostContainer = () => {
  const location = useLocation()
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data)
    };
    getPost()
  }, [path]);

  return (
    <PostWrapper>
      <PostViewer post={post} />
      <Profile />
      <HorizontalLine />
      <Comment />
    </PostWrapper>
  );
};

export default PostContainer;
