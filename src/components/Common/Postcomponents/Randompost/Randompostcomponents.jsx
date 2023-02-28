import React from "react";
import { Link } from "react-router-dom";
import "./Randompostcomponents.css";

const Randompostcomponents = ({ blog }) => {
  return (
    <div className="post post-row">
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
        <ul className="post-meta">
          <li>
            <a href="author.html">{blog?.author}</a>
          </li>
          <li>{blog?.createdAt}</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam...
        </p>
      </div>
    </div>
  );
};

export default Randompostcomponents;
