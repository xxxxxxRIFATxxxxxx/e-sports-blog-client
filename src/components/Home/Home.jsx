import React, { useEffect, useState } from "react";
import useBlogs from "../../hooks/useBlogs";
import Wideads from "../Common/Ads/Wideads";
import Footer from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";
import Div_1_main from "./DIV_1/Div_1_main";
import Div_2_main from "./DIV_2/Div_2_main";
import DIV_3_main from "./DIV_3/DIV_3_main";
import Hero_main from "./DIV_Hero/Hero_main";
import "./Home.css";

const Home = () => {
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        fetch(`${process.env.REACT_APP_API_URL}/blogs`)
            .then((res) => res.json())
            .then((data) => {
                const result = data.result;
                console.log(result);
                setBlogs(result);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
            });
    }, [blogs]);

    return (
        <>
            <Header />
            <Hero_main blogs={blogs.slice(0, 3)} />
            <Div_1_main blogs={blogs.slice(3, 7)} />
            <Wideads />
            <Div_2_main />
            <DIV_3_main />
            <Footer />
        </>
    );
};

export default Home;
