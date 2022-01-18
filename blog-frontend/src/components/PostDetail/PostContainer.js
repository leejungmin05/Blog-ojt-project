import React from "react";
import { useLocation } from "react-router-dom";
import Profile from "../Home/Profile";
import PostViewer from "./PostViewer";
import HorizontalLine from "../Home/HorizontalLine";
import Comment from "./Comment";
import styled from "styled-components";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 128px;
  width: 768px;
  margin-left: auto;
  margin-right: auto;
`;

const PostContainer = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  return (
    <PostWrapper>
      <PostViewer path={path} />
      <Profile />
      <HorizontalLine />
      <Comment />
    </PostWrapper>
  );
};

export default PostContainer;
