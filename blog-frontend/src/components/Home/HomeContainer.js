import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import PostTagList from "./PostTagList";
import styled from "styled-components";
import axios from "axios";
import Posts from "./Post/Posts";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 124px;
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
`;

const HomeContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <HomeWrapper>
      <Profile />
      <Posts posts={posts} />
      <PostTagList />
    </HomeWrapper>
  );
};

export default HomeContainer;
