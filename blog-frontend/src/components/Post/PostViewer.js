import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const PostTitle = styled.div`
  font-weight: 800;
  h1 {
    font-size: 3rem;
    letter-spacing: -0.004em;
    font-weight: 800;
    color: rgb(52, 58, 64);
    margin-bottom: 2rem;
    word-break: keep-all;
  }
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

const PostSubInfo = styled.div`
  font-weight: 300;
  font-size: 1rem;
  padding-top: 8px;

  span+ span: before {
    color: gray;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    content: "\\B7";
  }
`;

const PostButton = styled.div`
cursor: pointer;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const PostContent = styled.div`
  font-size: 1.3rem;
  color: rgb(34, 36, 38);
  letter-spacing: -0.01em;
  margin: 3rem 0px 15rem 0px;
`;

const PostViewer = () => {
  return (
    <PostWrapper>
      <PostTitle>
        <h1> ㅅㄷㄴㅅ </h1>
        <PostInfo>
          <PostSubInfo>
            <span>
              <b>leejungmin05</b>
            </span>
            <span>7분 전</span>
          </PostSubInfo>
          <Spacer />
          <PostButton>
            <Button variant="text">수정</Button>
            <Button variant="text">삭제</Button>
          </PostButton>
        </PostInfo>
      </PostTitle>
      <PostContent  dangerouslySetInnerHTML = {{ __html: '<p> HTML </p> <I> 이탤릭체 </I>'}} />
    </PostWrapper>
  );
};

export default PostViewer;
