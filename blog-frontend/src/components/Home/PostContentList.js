import React from "react";
import styled from "styled-components";
import HorizontalLine from "./HorizontalLine";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction : column;
  align-items: flex-start;
`;

const PostTitle = styled.div`
   font-weight: bold;
   font-size: 1.6rem;
`

const PostContent = styled.div`
    color: gray;
`

const PostDate = styled.span`
    color: gray;
    font-size: 0.8rem;
    display: flex;
    flex-direction: row;
`
const Seperator = styled.div`
    margin-left:8px;
    margin-right:8px;
`
const PostContentList = () => {
  return (
      <>
      <HorizontalLine />
      <ContentWrapper>
          <PostTitle>
              test
          </PostTitle>
          <PostContent>
              <p>welcome</p>
          </PostContent>
          <PostDate>
              <span>7일 전</span>
              <Seperator>·</Seperator>
              <span> 0개의 댓글</span>
              </PostDate>
      </ContentWrapper>
      </>
  )
};

export default PostContentList;
