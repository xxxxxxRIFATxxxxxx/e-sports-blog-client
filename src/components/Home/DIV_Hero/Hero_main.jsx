import React, { useEffect, useState } from "react";
import "./Hero_main.css";
import Big_post_component from "./Big_post_component";
import Small_post_component from "./Small_post_component";
import useBlogs from "../../../hooks/useBlogs";

const Hero_main = () => {
    // Initial state for blogs
    const [blogs, setBlogs] = useState([]);

    // Get fetch function define
    const { getLimitedBlogs } = useBlogs();

    // Call fetch function
    useEffect(() => {
        getLimitedBlogs(3).then((result) => {
            setBlogs(result);
        });
    }, []);
    return (
        <>
            <div className="section">
                <div className="container">
                    {blogs?.length === 0 ? (
                        "Loading...."
                    ) : (
                        <div id="hot-post" className="row hot-post">
                            <div className="col-md-8 hot-post-left ">
                                <Big_post_component blog={blogs[0]} />
                            </div>

                            <div className="col-md-4 hot-post-right ">
                                <Small_post_component blog={blogs[2]} />
                                <Small_post_component blog={blogs[1]} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Hero_main;
