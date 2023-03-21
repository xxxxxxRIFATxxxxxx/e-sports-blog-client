import React, { useEffect, useState } from "react";
import useBlogs from "../../hooks/useBlogs";
import useCategories from "../../hooks/useCategories";
import Wideads from "../Common/Ads/Wideads";
import Footer from "../Common/Footer/Footer";
import Football_kick from "../Common/games/football_kick/Football_kick";
import Header from "../Common/Header/Header";
import Div_1_main from "./DIV_1/Div_1_main";
import Div_2_main from "./DIV_2/Div_2_main";
import DIV_3_main from "./DIV_3/DIV_3_main";
import Hero_main from "./DIV_Hero/Hero_main";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <Football_kick />
      <Hero_main />
      <Div_1_main />
      {/* <Wideads /> */}
      <Div_2_main />
      <DIV_3_main />
      <Footer />
    </>
  );
};

export default Home;
