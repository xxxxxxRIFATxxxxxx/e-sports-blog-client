import React, { useEffect, useState } from "react";
import useBlogs from "../../../hooks/useBlogs";
import Midpostcomponents from "../../Common/Postcomponents/Midpost/Midpostcomponents";

const MidPostContainer = ({ category }) => {
    const [blogs, setBlogs] = useState([]);
    const { getBlogsByCategory } = useBlogs();

    useEffect(() => {
        getBlogsByCategory(category.title).then((result) =>
            setBlogs(result.slice(0, 3))
        );
    }, [category]);

    return (
        <div className="row">
            <div className="col-md-12">
                <div className="section-title">
                    <h2 className="title">{category.title}</h2>
                </div>
            </div>

            {blogs.length === 0 && "Loading..."}

            {blogs.map((blog) => {
                return <Midpostcomponents blog={blog} />;
            })}
        </div>
    );
};

export default MidPostContainer;
