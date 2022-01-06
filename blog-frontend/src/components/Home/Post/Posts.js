import React from "react";
import PostContentList from "../PostContentList";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <PostContentList post={post} key={index}/>
      ))}
    </div>
  );
};

export default Posts;
