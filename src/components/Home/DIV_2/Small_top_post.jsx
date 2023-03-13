import React, { useEffect, useState } from "react";
import useBlogs from "../../../hooks/useBlogs";
import Smallpostcomponents from "../../Common/Postcomponents/Smallpost/Smallpostcomponents";

const Small_top_post = () => {
    const [blogs, setBlogs] = useState([]);
    const { getLimitedBlogs } = useBlogs();

    useEffect(() => {
        getLimitedBlogs(19).then((result) => {
            for (let i = 0; i < 10; i++) {
                result.shift();
            }

            setBlogs(result);
        });
    }, []);

    return (
        <>
            <div className="row">
                {blogs.length === 0 && "Loading...."}

                {blogs.map((item) => {
                    return (
                        <div className="col-md-4">
                            <Smallpostcomponents blog={item} />;
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Small_top_post;
