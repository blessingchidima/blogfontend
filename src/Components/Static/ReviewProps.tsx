import React from "react";
import styled from "styled-components";
import { BsStars } from "react-icons/bs";
import { MdOutlineBookmarkAdd } from "react-icons/md";

interface iReviews {
  img?: any;
  name?: string;
  bold?: string;
  grey?: string;
  time?: string;
  boxImg?: any;
  toggle?: boolean;
  txt?: string;
  setToggle?: boolean;
}

const ReviewProps: React.FC<iReviews> = ({
  img,
  name,
  bold,
  grey,
  setToggle,
  time,
  boxImg,
  toggle,
  txt,
}) => {
  return (
    <div>
      <Container>
        <Main>
          <Flex>
            <Avatar src={img} />
            <Name>{name}</Name>
          </Flex>
          <BoldText>{bold}</BoldText>
          <GreyText>{grey}</GreyText>
          <Hold>
            <Time>
              {time} {toggle && <Txt>{txt}</Txt>}
              {setToggle && (
                <BsStars
                  style={{
                    color: "yellow",
                    fontSize: "20px",
                    marginLeft: "10px",
                  }}
                />
              )}
            </Time>

            <BookMark />
          </Hold>
        </Main>
        <MainImg src={boxImg} />
      </Container>
    </div>
  );
};

export default ReviewProps;

const Txt = styled.div`
  margin-left: 10px;
  padding: 5px 15px;
  border-radius: 25px;
  background-color: #e4e2e2;
`;

const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

const Main = styled.div`
  cursor: pointer;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

const Name = styled.div`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 500;
`;

const BoldText = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: #2b2a2a;
  width: 500px;
`;

const GreyText = styled.div`
  font-size: 17px;
  font-weight: 400;
  color: darkgrey;
  margin: 10px 0;
`;

const Hold = styled.div`
  font-size: 14px;
  color: #646363;
  display: flex;
  justify-content: space-between;
  width: 95%;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
`;

const BookMark = styled(MdOutlineBookmarkAdd)`
  font-size: 30px;
`;

const MainImg = styled.img``;
