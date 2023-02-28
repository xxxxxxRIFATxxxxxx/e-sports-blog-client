import React from "react";
import { Link } from "react-router-dom";
import "./Smallpostcomponents.css";

const Smallpostcomponents = ({ blog }) => {
  return (
    <div className="post post-widget">
      <Link className="post-img" to={`/PostDetails?blogId=${blog?._id}`}>
        <img src={blog?.thumbnail} alt="" />
      </Link>
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
