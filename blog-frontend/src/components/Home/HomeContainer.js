import React from "react";
import Profile from "./Profile";
import styled from "styled-components";
import PostContentList from "./PostContentList";
import PostTagList from "./PostTagList";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 124px;
  width: 768px;
  margin-left: auto;
  margin-right: auto;
`;

const HomeContainer = () => {
  return (
    <HomeWrapper>
      <Profile />
      <PostContentList />
      <PostTagList />
    </HomeWrapper>
  );
};

export default HomeContainer;
