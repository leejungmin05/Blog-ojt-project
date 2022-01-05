import React from "react";
import styled from "styled-components";

const CommentWrapper = styled.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8rem;
  margin-bottom: 8rem;
`;

const CommentNum = styled.div`
  h4 {
    font-weight: 500;
    font-size: 1.1rem;
  }
`;

const CommentInputForm = styled.textarea`
  resize: none;
  padding: 1rem 1rem 1.5rem;
  outline: none;
  border: 1px solid rgb(233, 236, 239);
  margin-bottom: 1.5rem;
  width: 734px;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  color: rgb(33, 37, 41);
  line-height: 1.75;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CommentButton = styled.button`
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: none;
  background: rgb(18, 184, 134);
  color: white;
  border-radius: 4px;
  padding: 0px 1.25rem;
  height: 2rem;
  font-size: 1rem;
`;

const Comment = () => {
  return (
    <CommentWrapper>
      <CommentNum>
        <h4>0 개의 댓글</h4>
      </CommentNum>
      <CommentInputForm placeholder="댓글을 작성하세요." />
      <ButtonWrapper>
        <CommentButton> 댓글 작성</CommentButton>
      </ButtonWrapper>
    </CommentWrapper>
  );
};

export default Comment;
