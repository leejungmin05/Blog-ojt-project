import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ProfileWrapper = styled.div`
  display: flex;
  background: white;
  margin: 0 auto;
  width: 100%;
  flex-direction: row;
`;

const ProfileTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ProfileName = styled.div`
  font-size: 1.6rem;
  margin-left: 20px;
  font-weight: 600;
`;

const ProfileText = styled.div`
  font-size: 1.1rem;
  margin-top: 8px;
  margin-left: 20px;
  color: gray;
`;

const ProfileImg = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
`;

const Profile = () => {
  return (
    <ProfileWrapper>
      <Link to="/">
        <ProfileImg>
          <img
            width="100%"
            height="100%"
            src="https://media.vlpt.us/images/leejungmin05/profile/e9975979-884c-4f89-9f8a-042f4047aa6e/social.png?w=240"
            alt="profile"
          />
        </ProfileImg>
      </Link>
      <ProfileTextWrapper>
        <ProfileName>이정민</ProfileName>
        <ProfileText>웰컴 ^__^</ProfileText>
      </ProfileTextWrapper>
    </ProfileWrapper>
  );
};

export default Profile;
