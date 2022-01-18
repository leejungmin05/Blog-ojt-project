import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import "./style.css";

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const PostTitle = styled.div`
  font-weight: 800;
  h1 {
    font-size: 3rem;
    letter-spacing: -0.004em;
    font-weight: 800;
    color: rgb(52, 58, 64);
    margin-bottom: 2rem;
    word-break: keep-all;
  }
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
`;

const PostSubInfo = styled.div`
  font-weight: 300;
  font-size: 1rem;
  padding-top: 8px;

  span+span: before {
    color: gray;
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    content: "\\B7";
  }
`;

const PostButton = styled.div`
  cursor: pointer;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const PostContent = styled.div`
  font-size: 1.2rem;
  color: rgb(34, 36, 38);
  letter-spacing: -0.01em;
  margin: 5rem 0px 15rem 0px;
  white-space: pre-wrap;
`;

const Tags = styled.div`
  font-size: 1rem;
  margin-bottom: 3rem;
  font-weight: 100;
  tag {
    display: inline-block;
    margin-right: 0.5rem;
  }
`;

const PostViewer = (props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState({});

  Modal.setAppElement("#root");

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + props.path);
      setPost(res.data);
    };
    getPost();
  }, [props.path,post]);

  const handleDelete = async () => {
    try {
      await axios.delete("/posts/" + props.path);
      window.location.replace("/");
    } catch (err) {}
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PostWrapper>
      <PostTitle>
        <h1> {post.title} </h1>
        <PostInfo>
          <PostSubInfo>
            <span>
              <b>leejungmin05</b>
            </span>
            <span>{new Date(post.publishDate).toDateString()}</span>
          </PostSubInfo>
          <Spacer />
          <PostButton>
            <Button
              variant="text"
              onClick={() => {
                navigate(`/create/${post._id}`);
              }}>수정
            </Button>
            <Button variant="text" onClick={toggleModal}>
              삭제
            </Button>
            <Modal
              isOpen={isOpen}
              onRequestClose={toggleModal}
              className="modal"
              overlayClassName="overlay"
              closeTimeoutMS={500}>
             <div className="title">포스트 삭제</div> 
             <div className="font">확인 버튼을 누르면 삭제됩니다.</div>  
             <div className="button-area">
             <button className="button" onClick={toggleModal && handleDelete } >확인</button>
             </div>
              
            </Modal>
            
          </PostButton>
        </PostInfo>
      </PostTitle>
      <PostContent>{post.body}</PostContent>
      <Tags> {post.tags && post.tags.map(tag=> (
          <tag> #{tag} </tag>
        ))} </Tags>
    </PostWrapper>
  );
};

export default PostViewer;
