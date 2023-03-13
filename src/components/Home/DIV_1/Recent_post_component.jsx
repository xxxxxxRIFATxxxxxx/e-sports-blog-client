import React, { useEffect, useState } from "react";
import useBlogs from "../../../hooks/useBlogs";
import useCategories from "../../../hooks/useCategories";
import Bigpostcomponents from "../../Common/Postcomponents/Bigpost/Bigpostcomponents";
import MidPostContainer from "./MidPostContainer";

const Recent_post_component = () => {
    const [blogs, setBlogs] = useState([]);
    const { getLimitedBlogs } = useBlogs();
    const { categories } = useCategories();

    useEffect(() => {
        getLimitedBlogs(7).then((result) => {
            for (let i = 0; i < 3; i++) {
                result.shift();
            }

            setBlogs(result);
        });
    }, []);

    return (
        <>
            {blogs.length === 0 ? (
                "Loading..."
            ) : (
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2 className="title">Recent posts</h2>
                        </div>
                    </div>

                    <Bigpostcomponents blog={blogs[0]} />
                    <Bigpostcomponents blog={blogs[1]} />

                    <div className="clearfix visible-md visible-lg"></div>

                    <Bigpostcomponents blog={blogs[2]} />

                    <Bigpostcomponents blog={blogs[3]} />
                </div>
            )}

            {categories.slice(0, 3).map((category) => {
                return <MidPostContainer category={category} />;
            })}
        </>
    );
};

export default Recent_post_component;
