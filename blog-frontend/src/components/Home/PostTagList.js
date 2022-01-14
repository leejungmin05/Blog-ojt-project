import React  from "react";
import styled from "styled-components";

const TagListWrapper = styled.div`
  position: absolute;
  width: 11.5rem;
  left: -13.5rem;
  top: 10rem;
`;

const TagListTitle = styled.div`
  font-size: 1rem;
  line-height: 1;
  color: rgb(73, 80, 87);
  font-weight: 600;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgb(173, 181, 189);
`;

const TagList = styled.div`
 display: flex;
 flex-direction: column;
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: normal;
  color: gray;
  span {
    padding-left: 0.5rem;
  }
  tag {
    font-weight: normal;
    padding-top: 0.1rem;
  }
`;

const PostTagList = ({ posts }) => {
  const tags = [];
  posts.map((post) => 
    post.tags.map((tag)=>
      tags.push(tag)
    ))
  
  const tagsArray = {};
  tags.forEach((i) => {
    tagsArray[i] = (tagsArray[i] || 0) +1;
    return tagsArray;
  },{});

  const keys = Object.keys(tagsArray);

  return (
    <TagListWrapper>
      <TagListTitle>태그 목록</TagListTitle>
      <TagList style={{ color: "#20c997" }}>
        전체보기
      </TagList>
      <TagList>
      {keys && 
      keys.map((tag) =>
      <tag> {tag} <span>  ({tagsArray[tag]})</span> </tag>
      )}
      </TagList>
    </TagListWrapper> 
  );
};

export default PostTagList;

/* {posts && posts.map((post) => 
        post.tags.map((tag) => 
          <tag> {tag} </tag>
          ))} */
