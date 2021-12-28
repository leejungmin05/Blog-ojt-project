import styled from "styled-components";
<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic+Coding&display=swap');
</style>

const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    width: 100%;
`;

const WhiteBackground = styled.div`
background: white;
display: flex;
justify-content: center;
`;

const HeaderContents = styled.div`
width: 1200px;
height: 55px;
display: flex;
flex-direction: row;
align-items: center;
`;

const Logo = styled.div`
font-size: 1.4rem;
font-family:'Nanum Gothic Coding', monospace;
`;

const Spacer = styled.div`
    flex-grow: 1;
`;

const Header = ({children}) => {
    return (
        <Positioner>
            <WhiteBackground>
                <HeaderContents>
                    <Logo>leejungmin05.log</Logo>
                    <Spacer/>
                    {children}
                </HeaderContents>
            </WhiteBackground>
        </Positioner>
    );
};

export default Header;