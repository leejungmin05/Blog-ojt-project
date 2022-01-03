import React from "react";
import Profile from "../Home/Profile";
import PostViewer from "./PostViewer";
import styled from "styled-components";
import HorizontalLine from "../Home/HorizontalLine";
import Comment from "./Comment";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 128px;
  width: 768px;
  margin-left: auto;
  margin-right: auto;
`;

const PostContainer = () => {
  return (
    <PostWrapper>
    <PostViewer />
    <Profile />
    <HorizontalLine />
    <Comment />
    </PostWrapper>
  );
};

export default PostContainer;
