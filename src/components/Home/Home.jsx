import React from "react";
import Wideads from "../Common/Ads/Wideads";
import Footer from "../Common/Footer/Footer";
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
        <Hero_main/>
        <Div_1_main />
        <Wideads />
        <Div_2_main />
        <DIV_3_main />
        <Footer />

        </>
           
            
 
    );
};

export default Home;
