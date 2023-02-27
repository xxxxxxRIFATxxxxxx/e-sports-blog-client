import React from "react";
import "./Randompostcomponents.css";

const Randompostcomponents = ({ blog }) => {
  return (
    <div className="post post-row">
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
