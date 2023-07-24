import React from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

const MediumPostScreen = () => {
  return (
    <div>
      <Container>
        <Main>
          <Holder>
            <Btn>
              <AiOutlinePlus />
            </Btn>
            <Hold>
              <Icon />
            </Hold>
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

export default MediumPostScreen;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div``;

const Holder = styled.div``;

const Btn = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid orange;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.div``;

const Hold = styled.div`
  display: flex;
`;
