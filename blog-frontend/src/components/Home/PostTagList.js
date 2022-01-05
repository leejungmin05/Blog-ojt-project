import React from "react";
import styled from "styled-components";

const TagListWrapper = styled.div`
  position: absolute;
  width: 11.5rem;
  left: -13.5rem;
  top: 10.5%;
`;

const TagListTitle = styled.div`
  font-size: 1rem;
  line-height: 1;
  color: rgb(73, 80, 87);
  font-weight: 600;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgb(173, 181, 189);
`;

const TagList = styled.div`
  font-size: 0.875rem;
  line-height: 1.5;
  color: rgb(32, 201, 151);
  font-weight: normal;
  margin-top: 1rem;
  span {
    margin-left: 0.5rem;
    color: rgb(134, 142, 150);
    font-weight: normal;
  }
`;

const PostTagList = () => {
  return (
    <TagListWrapper>
      <TagListTitle>태그 목록</TagListTitle>
      <TagList>
        전체보기
        <span>(1)</span>
      </TagList>
    </TagListWrapper>
  );
};

export default PostTagList;
