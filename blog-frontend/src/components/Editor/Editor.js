import React, { useState, useEffect } from "react";
import TagBox from "./TagBox";
import "quill/dist/quill.bubble.css";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";


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
  textarea {
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
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + id);
      setTitle(res.data.title);
      setBody(res.data.body);
      setTags(res.data.tags);
    };
    getPost();
  }, [id]);

  const getTags = (tags) => {
    setTags(tags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      body,
      tags,
    };
    if( id === undefined) { 
      try {
      axios.post("/posts", newPost).then((response) => {
        window.location.replace("/post/" + response.data._id);
      });
    } catch (err) {}
    }else {
      try {
        axios.patch("/posts/"+id, newPost)
        window.location.replace("/post/" + id);
      } catch (err) {}
    } 
  };

  return (
    <>
      <EditorBlock>
          <TitleInput
          placeholder="제목을 입력하세요"
          value={title}
          type="text"
          onChange={e => setTitle(e.target.value)}
       />
        <TextWrapper>
          <textarea
            type="text"
            value={body}
            placeholder="내용을 입력하세요"
            onChange={(e) => setBody(e.target.value)}
          />
        </TextWrapper>
      </EditorBlock>
      <TagBox getTags={(e) => getTags(e)} />
      <ButtonBlock>
        <form onSubmit={handleSubmit}>
         <StyledButton type="submit">{ id ? "포스트 수정" : "포스트 등록"}</StyledButton>
          <StyledButton onClick={()=> navigate(-1)}>취소</StyledButton>
        </form>
      </ButtonBlock>
    </>
  );
};

export default Editor;
