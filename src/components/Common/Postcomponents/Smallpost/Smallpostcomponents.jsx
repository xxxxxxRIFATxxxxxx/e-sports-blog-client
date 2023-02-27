import React from "react";
import "./Smallpostcomponents.css";

const Smallpostcomponents = ({ blog }) => {
  return (
    <div className="post post-widget">
      <a className="post-img" href="blog-post.html">
        <img src={blog?.thumbnail} alt="" />
      </a>
      <div className="post-body">
        <div className="post-category">
          <a href="category.html">{blog?.category}</a>
        </div>
        <h3 className="post-title">
          <a href="blog-post.html">{blog?.title}</a>
        </h3>
      </div>
    </div>
  );
};

export default Smallpostcomponents;
