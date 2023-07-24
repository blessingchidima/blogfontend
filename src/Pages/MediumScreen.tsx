import React from "react";
import Header from "../Components/Static/Header";
import Hero from "./Comp/Hero";
import PostReviews from "./Comp/PostReviews";

const MediumScreen = () => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Hero />
      <PostReviews />
    </div>
  );
};

export default MediumScreen;

// const Container = styled.div``;

// const Main = styled.div``;
