import React from "react";
import styled from "styled-components";

const WriteActionButtonsBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  margin-left: 15rem;
  margin-right: 15rem;
  display: flex;
  justify-content: flex-end;
  button + button {
    margin-left: 0.5rem;
  }
`;

const StyledButton = styled.button`
  height: 2.3rem;
  width: 6rem;
  border: none;
  border-radius: 5px;
  color: white;
  background: black;
  &:hover {
    background: gray;
  }
`;

const WriteActionButtons = ({ onCancel, onPublish }) => {
  return (
    <WriteActionButtonsBlock>
      <StyledButton onClick={onPublish}>포스트 등록</StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
