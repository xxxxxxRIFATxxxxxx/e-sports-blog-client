import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useBlogs from "../../../hooks/useBlogs";
import Randompostcomponents from "../../Common/Postcomponents/Randompost/Randompostcomponents";
import Preloader_component from "../../Common/Preloader_icon/Preloader_component";

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
    <div>
      {blogs.length === 0 && <Preloader_component />}

      {blogs?.map((item) => {
        return <Randompostcomponents blog={item} />;
      })}

      <div className="section-row loadmore text-center">
        <Link to={`/allblogs`} className="primary-button">
          Load More
        </Link>
      </div>
    </div>
  );
};

export default ALL_post;
