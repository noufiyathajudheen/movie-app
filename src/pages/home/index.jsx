import React from "react";
import Banner from "../../components/banner";
import { HomeContainer } from "./style";
import RowCards from "../../components/rowcards";

const Home = () => {
  return (
    <HomeContainer>
      <Banner />
      <h2>Trending</h2>
      <RowCards />
    </HomeContainer>
  );
};

export default Home;
