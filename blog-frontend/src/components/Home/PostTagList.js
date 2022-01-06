import React from "react";
import styled from "styled-components";

const TagListWrapper = styled.div`
  position: absolute;
  width: 11.5rem;
  left: -13.5rem;
  top: 9%;
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
  font-size: 0.875rem;
  line-height: 1.5;
  font-weight: normal;
  color: gray;
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
      <TagList style={{ color:"#20c997"}}>
        전체보기
        <span>(1)</span>
      </TagList>
      <TagList>
        태그1
      </TagList>
    </TagListWrapper>
  );
};

export default PostTagList;
