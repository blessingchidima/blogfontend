import React from "react";
import Button from "./Button";
import styled from "styled-components";
import img from "../../Assets/medium.png";

const Header = () => {
  const [scroll, setScroll] = React.useState<boolean>(false);
  const onScroll = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", onScroll);
  return (
    <div>
      {scroll ? (
        <Container bg="">
          <Main>
            <Logo src={img} />
            <NavWithCalltoAction>
              <Navs>Our Story</Navs>
              <Navs>Membership</Navs>
              <Navs>Write</Navs>
              <Navs>Sign in</Navs>
              <Space />
              <Button title="Get Started" />
            </NavWithCalltoAction>
          </Main>
        </Container>
      ) : (
        <Container bg="1">
          <Main>
            <Logo src={img} />
            <NavWithCalltoAction>
              <Navs>Our Story</Navs>
              <Navs>Membership</Navs>
              <Navs>Write</Navs>
              <Navs>Sign in</Navs>
              <Space />
              <Button title="Get Started" />
            </NavWithCalltoAction>
          </Main>
        </Container>
      )}
    </div>
  );
};

export default Header;

const Space = styled.div`
  margin-left: 10px;
`;

const Container = styled.div<{
  bg: string;
}>`
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  height: 80px;
  background-color: ${({ bg }) => (bg ? "#ffbe44" : "white")};
  font-size: 14px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const Logo = styled.img``;

const NavWithCalltoAction = styled.div`
  display: flex;
  align-items: center;
`;

const Navs = styled.div`
  margin: 0 20px;
`;
