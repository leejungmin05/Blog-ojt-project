import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Fira+Mono:wght@500&display=swap');
</style>;

const Positioner = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0px;
  width: 100%;
  z-index: 1;
`;

const WhiteBackground = styled.div`
  background: white;
  display: flex;
  justify-content: center;
`;

const HeaderContents = styled.div`
  width: 1024px;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.4rem;
  font-family: "Fira Mono", monospace;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const Header = ({ children }) => {
  const location = useLocation();
  if(location.pathname === '/create') return null;
  return (
    <Positioner>
      <WhiteBackground>
        <HeaderContents>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo>leejungmin05.log</Logo>
          </Link>
          <Spacer />
          {children}
        </HeaderContents>
      </WhiteBackground>
    </Positioner>
  );
};

export default Header;
