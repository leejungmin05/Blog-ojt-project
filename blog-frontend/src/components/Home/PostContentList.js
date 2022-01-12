import React from "react";
import styled from "styled-components";
import HorizontalLine from "./HorizontalLine";
import { Link } from "react-router-dom";
import LinesEllipsis from 'react-lines-ellipsis';

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
  margin-top: 10px;
  line-height: 2rem;
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
        <Link to={`/post/${post._id}`} style={{ textDecoration: "none", color: "black" }}>
          <PostTitle>{post.title}</PostTitle>
        </Link>
        <PostContent><LinesEllipsis text={post.body} ellipsis="..." maxLine={3} basedOn="letters"/></PostContent>
        <PostDate>
          <span>{new Date(post.publishDate).toDateString()}</span>
          <span> 0개의 댓글</span>
        </PostDate>
      </ContentWrapper>
      </>
  );
};

export default PostContentList;
