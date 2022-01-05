import React from "react";
import Editor from "./Editor";
import EditorActionButton from "./EditorActionButton";
import TagBox from "./TagBox";

const EditorContainer = () => {
  return (
    <>
      <Editor />
      <TagBox />
      <EditorActionButton />
    </>
  );
};

export default EditorContainer;
