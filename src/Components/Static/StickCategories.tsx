import React from "react";
import styled from "styled-components";

const StickCategories = () => {
  const data: {}[] = [
    {
      txt: "Programming",
    },
    {
      txt: "Data science",
    },
    {
      txt: "Technology",
    },
    {
      txt: "Self Improvement",
    },
    {
      txt: "Writing",
    },
    {
      txt: "Relationships",
    },
    {
      txt: "Machine Learning",
    },
    {
      txt: "Productivity",
    },
    {
      txt: "Politics",
    },
  ];

  const newData: {}[] = [
    {
      txt: "Help",
    },
    {
      txt: "Status",
    },
    {
      txt: "Writers",
    },
    {
      txt: "Blog",
    },
    {
      txt: "Careers",
    },
    {
      txt: "Privacy",
    },
    {
      txt: "Terms",
    },
    {
      txt: "About",
    },
    {
      txt: "Text to Speech",
    },
    {
      txt: "Teams",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <BoldText>Discover more of what matters to you</BoldText>
          <Holder>
            {data.map((el: any) => {
              return <CategoryBtn>{el.txt}</CategoryBtn>;
            })}
            <GreenText>See more topics</GreenText>
          </Holder>
        </Main>
        <LinksHolder>
          {newData.map((el: any) => (
            <Links>{el.txt}</Links>
          ))}
        </LinksHolder>
      </Container>
    </div>
  );
};

export default StickCategories;

const Container = styled.div`
  width: 400px;
  position: sticky;
  top: 90px;
`;

const Main = styled.div`
  border-bottom: 1px solid #e4e2e2;
`;

const BoldText = styled.div`
  font-weight: bold;
  font-size: 14px;
`;

const Holder = styled.div`
  margin: 10px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const CategoryBtn = styled.div`
  padding: 10px 15px;
  background-color: #e4e2e2;
  border-radius: 20px;
  display: flex;
  font-size: 14px;
  margin-right: 10px;
  margin-top: 10px;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
`;

const GreenText = styled.div`
  margin: 20px 0;
  font-weight: 500;
  font-size: 14px;
  color: #059605;
  cursor: pointer;
`;

const LinksHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  font-size: 14px;
  color: grey;
`;

const Links = styled.div`
  margin-right: 30px;
  margin-top: 10px;
  cursor: pointer;
`;
