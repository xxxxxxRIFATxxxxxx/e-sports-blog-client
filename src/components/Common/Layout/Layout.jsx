import React from "react";
import HeroSection from "../../Home/HeroSection/HeroSection";
import Aside from "../Aside/Aside";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children, showHeroSection }) => {
    return (
        <>
            <Header />
            {/* Hero Section */}
            {showHeroSection && <HeroSection />}

            <div className="container">
                <div className="row">
                    <div className="col-md-8">{children}</div>

                    <div className="col-md-4">
                        <Aside />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
