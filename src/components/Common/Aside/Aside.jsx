import React from "react";
import "./Aside.css";
import Ads_news from "./Ads_news";
import Categories_social from "./Categories_social";
import Insta_and_ads from "./Insta_and_ads";

const Aside = () => {
    return (
        <div>
            <Ads_news/>

            <Categories_social/>

            <Insta_and_ads />


            {/* <div className="aside-widget">
                <div className="section-title">
                    <h2 className="title">Popular Posts</h2>
                </div>

                <div className="post post-widget">
                    <a className="post-img" href="blog-post.html">
                        <img src="./img/widget-3.jpg" alt="" />
                    </a>
                    <div className="post-body">
                        <div className="post-category">
                            <a href="category.html">Lifestyle</a>
                        </div>
                        <h3 className="post-title">
                            <a href="blog-post.html">
                                Ne bonorum praesent cum, labitur persequeris
                                definitionem quo cu?
                            </a>
                        </h3>
                    </div>
                </div>

                <div className="post post-widget">
                    <a className="post-img" href="blog-post.html">
                        <img src="./img/widget-2.jpg" alt="" />
                    </a>
                    <div className="post-body">
                        <div className="post-category">
                            <a href="category.html">Technology</a>
                            <a href="category.html">Lifestyle</a>
                        </div>
                        <h3 className="post-title">
                            <a href="blog-post.html">
                                Mel ut impetus suscipit tincidunt. Cum id ullum
                                laboramus persequeris.
                            </a>
                        </h3>
                    </div>
                </div>

                <div className="post post-widget">
                    <a className="post-img" href="blog-post.html">
                        <img src="./img/widget-4.jpg" alt="" />
                    </a>
                    <div className="post-body">
                        <div className="post-category">
                            <a href="category.html">Health</a>
                        </div>
                        <h3 className="post-title">
                            <a href="blog-post.html">
                                Postea senserit id eos, vivendo periculis ei qui
                            </a>
                        </h3>
                    </div>
                </div>

                <div className="post post-widget">
                    <a className="post-img" href="blog-post.html">
                        <img src="./img/widget-5.jpg" alt="" />
                    </a>
                    <div className="post-body">
                        <div className="post-category">
                            <a href="category.html">Health</a>
                            <a href="category.html">Lifestyle</a>
                        </div>
                        <h3 className="post-title">
                            <a href="blog-post.html">
                                Sed ut perspiciatis, unde omnis iste natus error
                                sit
                            </a>
                        </h3>
                    </div>
                </div>
            </div> */}


        </div>
    );
};

export default Aside;
