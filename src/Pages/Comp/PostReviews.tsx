import React from "react";
import styled from "styled-components";
import ReviewProps from "../../Components/Static/ReviewProps";
import StickCategories from "../../Components/Static/StickCategories";
import img from "../../Assets/medium.png";
import img1 from "../../Assets/avatar1.png";
import img2 from "../../Assets/avatar2.png";
import img3 from "../../Assets/avatar3.png";
import img4 from "../../Assets/avatar4.jpg";
import boxImg from "../../Assets/image1.png";
import boxImg2 from "../../Assets/image2.png";
import boxImg3 from "../../Assets/image3.jpg";
import boxImg4 from "../../Assets/image4.png";
import boxImg5 from "../../Assets/image5.jpg";

const PostReviews = () => {
  return (
    <div>
      <Container>
        <Main>
          <Hold>
            <ReviewProps
              img={img}
              boxImg={boxImg}
              name="Barak Obama"
              bold="Thank You to America's Librarians for Protecting Our Freedom to Read"
              grey="I wrote a letter thanking librarians across the country for everything they're doing to protect our freedom to read"
              time="Jul 17 . 4 min read"
            />
            <ReviewProps
              img={img1}
              boxImg={boxImg2}
              name="Fredrick Wukari"
              bold="How to identify 'TRUTHY' Tech Friends"
              grey="Do you remember Amazon's connected Homes? Only a few years..."
              time="Feb 21 . 5 min read"
              toggle
              txt="Generative Ai"
            />
            <ReviewProps
              img={img2}
              boxImg={boxImg3}
              name="Edison Elbert"
              bold="The Greater it is to become a one true and phenomenal person"
              grey="My brother died five years ago. Engraved in my mind is the moment I, the unlucky bearer of a mother's worst nightmare, came..."
              time="Mar 30 . 7 min read"
              toggle
              txt="Design"
              setToggle
            />
            <ReviewProps
              img={img3}
              boxImg={boxImg4}
              name="Hannah Adusa"
              bold="Evolution of Truth is to be enhanced"
              grey="There is an envolution that can mutter greatness in me. Till the end of every year can we be the best that we can"
              time="Apr 12 . 2 min read"
              toggle
              txt="What were Reading"
            />
            <ReviewProps
              img={img4}
              boxImg={boxImg5}
              name="Erik Tolani"
              bold="I'm older than you now"
              grey="It's october 2022. The skies are red and darkening. Somewhere in a haunted lair, Elon Musk cackles mainiac normally..."
              time="Dec 25 . 15 min read"
            />
          </Hold>
          <StickCategories />
        </Main>
      </Container>
    </div>
  );
};

export default PostReviews;

const Hold = styled.div``;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;
