import React, { useState, useEffect } from "react";
import useBlogs from "../../../hooks/useBlogs";
import Top_big_post_component from "../../Common/Postcomponents/TOP_BIG_POST/Top_big_post_component";
import Preloader_component from "../../Common/Preloader_icon/Preloader_component";

const Top_posts = () => {
  const [blogs, setBlogs] = useState([]);
  const { getLimitedBlogs } = useBlogs();

  useEffect(() => {
    getLimitedBlogs(10).then((result) => {
      for (let i = 0; i < 7; i++) {
        result.shift();
      }

      setBlogs(result);
    });
  }, []);
  return (
    <>
      <div className="row">
        {blogs.length === 0 && <Preloader_component />}

        {blogs?.map((item) => {
          return <Top_big_post_component blog={item} />;
        })}
      </div>
    </>
  );
};

export default Top_posts;
