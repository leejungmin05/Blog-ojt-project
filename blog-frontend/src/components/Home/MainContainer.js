import React from "react";
import Profile from "./Profile";
import styled from "styled-components";
import HorizontalLine from "./HorizontalLine";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 124px;
  width: 768px;
  margin-left: auto;
  margin-right: auto;
`;

const MainContainer = () => {
  return (
    <MainWrapper>
      <Profile />
      <HorizontalLine />
    </MainWrapper>
  );
};

export default MainContainer;
