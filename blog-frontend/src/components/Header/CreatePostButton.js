import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled(Link)`
  font-weight: 600;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  text-decoration: none;
  transition: 0.2s all;
  border: 1px solid black;
  border-radius: 20px;
  color: black;

  &:hover {
    background: black;
    color: white;
  }
`;

const CreatePostButton = () => {
  return <StyledButton to="/create">새 글 작성</StyledButton>;
};

export default CreatePostButton;
