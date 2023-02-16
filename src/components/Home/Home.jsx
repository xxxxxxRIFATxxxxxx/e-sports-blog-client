import React from "react";
import Layout from "../Common/Layout/Layout";
import "./Home.css";

const Home = () => {
    return (
        <Layout showHeroSection={true}>
            {/* Section */}
            <div className="row">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Recent posts</h2>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="post">
                                <a className="post-img" href="blog-post.html">
                                    <img src="./img/post-1.jpg" alt="" />
                                </a>
                                <div className="post-body">
                                    <div className="post-category">
                                        <a href="category.html">Travel</a>
                                    </div>
                                    <h3 className="post-title">
                                        <a href="blog-post.html">
                                            Sed ut perspiciatis, unde omnis iste
                                            natus error sit
                                        </a>
                                    </h3>
                                    <ul className="post-meta">
                                        <li>
                                            <a href="author.html">John Doe</a>
                                        </li>
                                        <li>20 April 2018</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="post">
                                <a className="post-img" href="blog-post.html">
                                    <img src="./img/post-2.jpg" alt="" />
                                </a>
                                <div className="post-body">
                                    <div className="post-category">
                                        <a href="category.html">Technology</a>
                                        <a href="category.html">Lifestyle</a>
                                    </div>
                                    <h3 className="post-title">
                                        <a href="blog-post.html">
                                            Ne bonorum praesent cum, labitur
                                            persequeris definitionem quo cu?
                                        </a>
                                    </h3>
                                    <ul className="post-meta">
                                        <li>
                                            <a href="author.html">John Doe</a>
                                        </li>
                                        <li>20 April 2018</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="clearfix visible-md visible-lg"></div>

                        <div className="col-md-6">
                            <div className="post">
                                <a className="post-img" href="blog-post.html">
                                    <img src="./img/post-4.jpg" alt="" />
                                </a>
                                <div className="post-body">
                                    <div className="post-category">
                                        <a href="category.html">Health</a>
                                    </div>
                                    <h3 className="post-title">
                                        <a href="blog-post.html">
                                            Postea senserit id eos, vivendo
                                            periculis ei qui
                                        </a>
                                    </h3>
                                    <ul className="post-meta">
                                        <li>
                                            <a href="author.html">John Doe</a>
                                        </li>
                                        <li>20 April 2018</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="post">
                                <a className="post-img" href="blog-post.html">
                                    <img src="./img/post-7.jpg" alt="" />
                                </a>
                                <div className="post-body">
                                    <div className="post-category">
                                        <a href="category.html">Health</a>
                                        <a href="category.html">Lifestyle</a>
                                    </div>
                                    <h3 className="post-title">
                                        <a href="blog-post.html">
                                            Sed ut perspiciatis, unde omnis iste
                                            natus error sit
                                        </a>
                                    </h3>
                                    <ul className="post-meta">
                                        <li>
                                            <a href="author.html">John Doe</a>
                                        </li>
                                        <li>20 April 2018</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Lifestyle</h2>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="post post-sm">
                                <a className="post-img" href="blog-post.html">
                                    <img src="./img/post-9.jpg" alt="" />
                                </a>
                                <div className="post-body">
                                    <div className="post-category">
                                        <a href="category.html">Lifestyle</a>
                                    </div>
                                    <h3 className="post-title title-sm">
                                        <a href="blog-post.html">
                                            Mel ut impetus suscipit tincidunt.
                                            Cum id ullum laboramus persequeris.
                                        </a>
                                    </h3>
                                    <ul className="post-meta">
                                        <li>
                                            <a href="author.html">John Doe</a>
                                        </li>
                                        <li>20 April 2018</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="post post-sm">
                                <a className="post-img" href="blog-post.html">
                                    <img src="./img/post-8.jpg" alt="" />
                                </a>
                                <div className="post-body">
                                    <div className="post-category">
                                        <a href="category.html">Fashion</a>
                                        <a href="category.html">Lifestyle</a>
                                    </div>
                                    <h3 className="post-title title-sm">
                                        <a href="blog-post.html">
                                            Postea senserit id eos, vivendo
                                            periculis ei qui
                                        </a>
                                    </h3>
                                    <ul className="post-meta">
                                        <li>
                                            <a href="author.html">John Doe</a>
                                        </li>
                                        <li>20 April 2018</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="post post-sm">
                                <a className="post-img" href="blog-post.html">
                                    <img src="./img/post-11.jpg" alt="" />
                                </a>
                                <div className="post-body">
                                    <div className="post-category">
                                        <a href="category.html">Technology</a>
                                    </div>
                                    <h3 className="post-title title-sm">
                                        <a href="blog-post.html">
                                            Sed ut perspiciatis, unde omnis iste
                                            natus error sit
                                        </a>
                                    </h3>
                                    <ul className="post-meta">
                                        <li>
                                            <a href="author.html">John Doe</a>
                                        </li>
                                        <li>20 April 2018</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Fashion & Travel</h2>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="post post-sm">
                                <a className="post-img" href="blog-post.html">
                                    <img src="./img/post-10.jpg" alt="" />
                                </a>
                                <div className="post-body">
                                    <div className="post-category">
                                        <a href="category.html">Travel</a>
                                    </div>
                                    <h3 className="post-title title-sm">
                                        <a href="blog-post.html">
                                            Ne bonorum praesent cum, labitur
                                            persequeris definitionem quo cu?
                                        </a>
                                    </h3>
                                    <ul className="post-meta">
                                        <li>
                                            <a href="author.html">John Doe</a>
                                        </li>
                                        <li>20 April 2018</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="post post-sm">
                                <a className="post-img" href="blog-post.html">
                                    <img src="./img/post-12.jpg" alt="" />
                                </a>
                                <div className="post-body">
                                    <div className="post-category">
                                        <a href="category.html">Lifestyle</a>
                                    </div>
                                    <h3 className="post-title title-sm">
                                        <a href="blog-post.html">
                                            Sed ut perspiciatis, unde omnis iste
                                            natus error sit
                                        </a>
                                    </h3>
                                    <ul className="post-meta">
                                        <li>
                                            <a href="author.html">John Doe</a>
                                        </li>
                                        <li>20 April 2018</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="post post-sm">
                                <a className="post-img" href="blog-post.html">
                                    <img src="./img/post-13.jpg" alt="" />
                                </a>
                                <div className="post-body">
                                    <div className="post-category">
                                        <a href="category.html">Travel</a>
                                        <a href="category.html">Lifestyle</a>
                                    </div>
                                    <h3 className="post-title title-sm">
                                        <a href="blog-post.html">
                                            Mel ut impetus suscipit tincidunt.
                                            Cum id ullum laboramus persequeris.
                                        </a>
                                    </h3>
                                    <ul className="post-meta">
                                        <li>
                                            <a href="author.html">John Doe</a>
                                        </li>
                                        <li>20 April 2018</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h2 className="title">Technology & Health</h2>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="post post-sm">
                                <a className="post-img" href="blog-post.html">
                                    <img src="./img/post-4.jpg" alt="" />
                                </a>
                                <div className="post-body">
                                    <div className="post-category">
                                        <a href="category.html">Health</a>
                                    </div>
                                    <h3 className="post-title title-sm">
                                        <a href="blog-post.html">
                                            Postea senserit id eos, vivendo
                                            periculis ei qui
                                        </a>
                                    </h3>
                                    <ul className="post-meta">
                                        <li>
                                            <a href="author.html">John Doe</a>
                                        </li>
                                        <li>20 April 2018</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="post post-sm">
                                <a className="post-img" href="blog-post.html">
                                    <img src="./img/post-1.jpg" alt="" />
                                </a>
                                <div className="post-body">
                                    <div className="post-category">
                                        <a href="category.html">Travel</a>
                                    </div>
                                    <h3 className="post-title title-sm">
                                        <a href="blog-post.html">
                                            Mel ut impetus suscipit tincidunt.
                                            Cum id ullum laboramus persequeris.
                                        </a>
                                    </h3>
                                    <ul className="post-meta">
                                        <li>
                                            <a href="author.html">John Doe</a>
                                        </li>
                                        <li>20 April 2018</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="post post-sm">
                                <a className="post-img" href="blog-post.html">
                                    <img src="./img/post-3.jpg" alt="" />
                                </a>
                                <div className="post-body">
                                    <div className="post-category">
                                        <a href="category.html">Lifestyle</a>
                                    </div>
                                    <h3 className="post-title title-sm">
                                        <a href="blog-post.html">
                                            Ne bonorum praesent cum, labitur
                                            persequeris definitionem quo cu?
                                        </a>
                                    </h3>
                                    <ul className="post-meta">
                                        <li>
                                            <a href="author.html">John Doe</a>
                                        </li>
                                        <li>20 April 2018</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ads Section */}
            <div className="row">
                <div className="col-md-12 section-row text-center">
                    <a
                        href="#"
                        style={{
                            display: "inline-block",
                            margin: "auto",
                        }}
                    >
                        <img
                            className="img-responsive"
                            src="https://preview.colorlib.com/theme/callie/img/ad-2.jpg.webp"
                            alt=""
                        />
                    </a>
                </div>
            </div>

            {/* Section */}
            <div className="row">
                <div className="col-md-4">
                    <div className="section-title">
                        <h2 className="title">Lifestyle</h2>
                    </div>

                    <div className="post">
                        <a className="post-img" href="blog-post.html">
                            <img src="./img/post-6.jpg" alt="" />
                        </a>
                        <div className="post-body">
                            <div className="post-category">
                                <a href="category.html">Fashion</a>
                                <a href="category.html">Lifestyle</a>
                            </div>
                            <h3 className="post-title">
                                <a href="blog-post.html">
                                    Postea senserit id eos, vivendo periculis ei
                                    qui
                                </a>
                            </h3>
                            <ul className="post-meta">
                                <li>
                                    <a href="author.html">John Doe</a>
                                </li>
                                <li>20 April 2018</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="section-title">
                        <h2 className="title">Fashion</h2>
                    </div>

                    <div className="post">
                        <a className="post-img" href="blog-post.html">
                            <img src="./img/post-5.jpg" alt="" />
                        </a>
                        <div className="post-body">
                            <div className="post-category">
                                <a href="category.html">Lifestyle</a>
                            </div>
                            <h3 className="post-title">
                                <a href="blog-post.html">
                                    Sed ut perspiciatis, unde omnis iste natus
                                    error sit
                                </a>
                            </h3>
                            <ul className="post-meta">
                                <li>
                                    <a href="author.html">John Doe</a>
                                </li>
                                <li>20 April 2018</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="section-title">
                        <h2 className="title">Health</h2>
                    </div>

                    <div className="post">
                        <a className="post-img" href="blog-post.html">
                            <img src="./img/post-9.jpg" alt="" />
                        </a>
                        <div className="post-body">
                            <div className="post-category">
                                <a href="category.html">Lifestyle</a>
                            </div>
                            <h3 className="post-title">
                                <a href="blog-post.html">
                                    Mel ut impetus suscipit tincidunt. Cum id
                                    ullum laboramus persequeris.
                                </a>
                            </h3>
                            <ul className="post-meta">
                                <li>
                                    <a href="author.html">John Doe</a>
                                </li>
                                <li>20 April 2018</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section */}
            <div className="row">
                <div className="col-md-12">
                    <div className="post post-row">
                        <a className="post-img" href="blog-post.html">
                            <img src="./img/post-13.jpg" alt="" />
                        </a>
                        <div className="post-body">
                            <div className="post-category">
                                <a href="category.html">Travel</a>
                                <a href="category.html">Lifestyle</a>
                            </div>
                            <h3 className="post-title">
                                <a href="blog-post.html">
                                    Mel ut impetus suscipit tincidunt. Cum id
                                    ullum laboramus persequeris.
                                </a>
                            </h3>
                            <ul className="post-meta">
                                <li>
                                    <a href="author.html">John Doe</a>
                                </li>
                                <li>20 April 2018</li>
                            </ul>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam...
                            </p>
                        </div>
                    </div>

                    <div className="post post-row">
                        <a className="post-img" href="blog-post.html">
                            <img src="./img/post-1.jpg" alt="" />
                        </a>
                        <div className="post-body">
                            <div className="post-category">
                                <a href="category.html">Travel</a>
                            </div>
                            <h3 className="post-title">
                                <a href="blog-post.html">
                                    Sed ut perspiciatis, unde omnis iste natus
                                    error sit
                                </a>
                            </h3>
                            <ul className="post-meta">
                                <li>
                                    <a href="author.html">John Doe</a>
                                </li>
                                <li>20 April 2018</li>
                            </ul>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam...
                            </p>
                        </div>
                    </div>

                    <div className="post post-row">
                        <a className="post-img" href="blog-post.html">
                            <img src="./img/post-5.jpg" alt="" />
                        </a>
                        <div className="post-body">
                            <div className="post-category">
                                <a href="category.html">Lifestyle</a>
                            </div>
                            <h3 className="post-title">
                                <a href="blog-post.html">
                                    Postea senserit id eos, vivendo periculis ei
                                    qui
                                </a>
                            </h3>
                            <ul className="post-meta">
                                <li>
                                    <a href="author.html">John Doe</a>
                                </li>
                                <li>20 April 2018</li>
                            </ul>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam...
                            </p>
                        </div>
                    </div>

                    <div className="post post-row">
                        <a className="post-img" href="blog-post.html">
                            <img src="./img/post-6.jpg" alt="" />
                        </a>
                        <div className="post-body">
                            <div className="post-category">
                                <a href="category.html">Fashion</a>
                                <a href="category.html">Lifestyle</a>
                            </div>
                            <h3 className="post-title">
                                <a href="blog-post.html">
                                    Sed ut perspiciatis, unde omnis iste natus
                                    error sit
                                </a>
                            </h3>
                            <ul className="post-meta">
                                <li>
                                    <a href="author.html">John Doe</a>
                                </li>
                                <li>20 April 2018</li>
                            </ul>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam...
                            </p>
                        </div>
                    </div>

                    <div className="post post-row">
                        <a className="post-img" href="blog-post.html">
                            <img src="./img/post-7.jpg" alt="" />
                        </a>
                        <div className="post-body">
                            <div className="post-category">
                                <a href="category.html">Health</a>
                                <a href="category.html">Lifestyle</a>
                            </div>
                            <h3 className="post-title">
                                <a href="blog-post.html">
                                    Ne bonorum praesent cum, labitur persequeris
                                    definitionem quo cu?
                                </a>
                            </h3>
                            <ul className="post-meta">
                                <li>
                                    <a href="author.html">John Doe</a>
                                </li>
                                <li>20 April 2018</li>
                            </ul>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam...
                            </p>
                        </div>
                    </div>

                    <div className="section-row loadmore text-center">
                        <a href="#" className="primary-button">
                            Load More
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
