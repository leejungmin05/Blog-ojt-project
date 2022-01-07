import React, { useState} from "react";
import TagBox from './TagBox';
import "quill/dist/quill.bubble.css";
import styled from "styled-components";
import axios from "axios";

const EditorBlock = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin-left: 15rem;
  margin-right: 15rem;
`;

const TitleInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  width: 100%;
  margin-bottom: 2rem;
  border-bottom: 1px solid gray;
`;

const TextWrapper = styled.div`
  textarea{
    border: none;
    min-height: 320px;
    font-size: 1rem;
    line-height: 1.5;
    width: 100%;
  }

  textarea:focus {
    outline: none;
  }
`;

const ButtonBlock = styled.div`
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


const Editor = () => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState()

  const getTags = (tags) => {
    setTags(tags)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      tags
    };
    try {
     axios.post("/posts", newPost)
     .then((response) => {
      window.location.replace("/post/"+ response.data._id);
     })
    } catch (err) { }
  }

  return (
    <>
    <EditorBlock >
      <TitleInput placeholder="제목을 입력하세요" onChange={e => setTitle(e.target.value)} />
      <TextWrapper>
        <textarea  type="text" placeholder="내용을 입력하세요" onChange={e => setBody(e.target.value)}/>
      </TextWrapper>
    </EditorBlock>
    <TagBox getTags={e => getTags(e)} />
    <ButtonBlock>
      <form onSubmit={handleSubmit}>
      <StyledButton type="submit">포스트 등록</StyledButton>
      <StyledButton >취소</StyledButton>
      </form>
    </ButtonBlock>
    </>
  );
};

export default Editor;
