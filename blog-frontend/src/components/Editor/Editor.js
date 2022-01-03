import React, { useRef, useEffect } from "react";
import Quill from "quill";
import "quill/dist/quill.bubble.css";
import styled from "styled-components";

const EditorBlock = styled.div`
  padding-top: 5rem;
  padding-bottom: 5rem;
  margin-left : 5rem;
  margin-right: 5rem;
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

const QuillWrapper = styled.div`
  .ql-editor {
    min-height: 320px;
    font-size: 1rem;
    line-height: 1.5;
  }
  .ql-editor.ql-blank::before {
    left: 0px;
  }
`;

const Editor = () => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  useEffect(() => {
    quillInstance.current = new Quill(quillElement.current, {
      theme: "bubble",
      placeholder: "내용을 작성하세요. 드래그하면 툴박스를 사용할 수 있습니다.",
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }],
          ["bold", "italic", "underline"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["blockquote", "code-block", "link"],
        ],
      },
    });
  },[]);

  return ( 
  <EditorBlock>
      <TitleInput placeholder="제목을 입력하세요" />
      <QuillWrapper>
          <div ref={quillElement} />
      </QuillWrapper>
      </EditorBlock>);
};

export default Editor;
