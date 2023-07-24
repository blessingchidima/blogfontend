import React from "react";
import Button from "../../Components/Static/Button";
import styled from "styled-components";

const Hero = () => {
  return (
    <div>
      <Container>
        <Main>
          <LeftSider>
            <BigText>Stay curious.</BigText>
            <SmallText>
              Discover stories, thinking, and expertise from writers on any
              topic.
            </SmallText>
            <Button title="Start Reading" fs="" w="170px" />
          </LeftSider>
          <RightSider>
            Medium Medium Medium Medium Medium Medium Medium Medium Medium
            Medium Medium Medium Medium Medium Medium Medium Medium Medium
            Medium Medium Medium Medium Medium Medium Medium Medium Medium
            Medium Medium Medium Medium Medium Medium Medium Medium Medium
            Medium Medium Medium Medium Medium Medium Medium Medium Medium
            Medium Medium Medium Medium Medium Medium Medium Medium Medium
            Medium Medium Medium Medium Medium Medium Medium Medium Medium
            Medium Medium Medium Medium Medium Medium Medium Medium Medium
            Medium
          </RightSider>
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: calc(650px - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcbd47;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
  position: relative;
`;

const LeftSider = styled.div``;

const BigText = styled.div`
  font-size: 100px;
  font-weight: 600;
`;

const SmallText = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin: 30px 0;
  width: 500px;
  color: #646363;
`;

const RightSider = styled.div`
  width: 45%;
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  position: absolute;
  right: -60px;
`;
