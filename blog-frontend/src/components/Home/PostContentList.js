import React from "react";
import styled from "styled-components";
import HorizontalLine from "./HorizontalLine";
import { Link } from "react-router-dom";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PostTitle = styled.div`
  font-weight: bold;
  font-size: 1.6rem;
  cursor: pointer;
`;

const PostContent = styled.div`
  color: gray;
`;

const PostDate = styled.span`
  color: gray;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  span+ span: before {
    color: gray;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    content: "\\B7";
  }
`;

const PostContentList = () => {
  return (
    <>
      <HorizontalLine />
      <ContentWrapper>
        <Link to="/detail" style={{ textDecoration: "none", color: "black" }}>
          <PostTitle>test</PostTitle>
        </Link>
        <PostContent>
          <p>welcome</p>
        </PostContent>
        <PostDate>
          <span>7일 전</span>
          <span> 0개의 댓글</span>
        </PostDate>
      </ContentWrapper>
    </>
  );
};

export default PostContentList;
