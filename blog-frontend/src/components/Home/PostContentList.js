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
  font-size: 1.3rem;
  cursor: pointer;
`;

const PostContent = styled.div`
  color: gray;
  -webkit-line-clamp: 6;
  margin-top: 10px;
`;

const PostDate = styled.span`
  color: gray;
  font-size: 0.8rem;
  display: flex;
  flex-direction: row;
  text-decoration: none;
  margin-top: 20px;
  span+span: before {
    color: gray;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    content: "\\B7";
  }
`;

const PostContentList = ({ post }) => {
  return (
    <>
      <HorizontalLine />
      <ContentWrapper>
        <Link to="/detail" style={{ textDecoration: "none", color: "black" }}>
          <PostTitle>{post.title}</PostTitle>
        </Link>
        <PostContent>{post.body}</PostContent>
        <PostDate>
          <span>{new Date(post.publishDate).toDateString()}</span>
          <span> 0개의 댓글</span>
        </PostDate>
      </ContentWrapper>
    </>
  );
};

export default PostContentList;
