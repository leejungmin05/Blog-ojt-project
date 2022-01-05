import React from "react";
import PostContentList from "../PostContentList";

const Posts = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <PostContentList post={post} />
      ))}
    </div>
  );
};

export default Posts;
