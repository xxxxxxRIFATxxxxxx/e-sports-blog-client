import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBlogs from "../../../hooks/useBlogs";
import Randompostcomponents from "../../Common/Postcomponents/Randompost/Randompostcomponents";

const ALL_post = () => {
    const [blogs, setBlogs] = useState([]);
    const { getLimitedBlogs } = useBlogs();

    useEffect(() => {
        getLimitedBlogs(25).then((result) => {
            for (let i = 0; i < 19; i++) {
                result.shift();
            }

            setBlogs(result);
        });
    }, []);

    return (
        <div className="col-md-8">
            {blogs.length === 0 && "Loading..."}

            {blogs?.map((item) => {
                return <Randompostcomponents blog={item} />;
            })}

            <div className="section-row loadmore text-center">
                <Link to={`/`} className="primary-button">
                    Load More
                </Link>
            </div>
        </div>
    );
};

export default ALL_post;
