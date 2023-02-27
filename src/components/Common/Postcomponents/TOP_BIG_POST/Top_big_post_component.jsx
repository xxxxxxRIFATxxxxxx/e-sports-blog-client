import React from "react";
import "./Top_big_post.css";

const Top_big_post_component = ({ blog }) => {
  return (
    <div className="col-md-4">
      <div className="section-title">
        <h2 className="title">{blog?.category}</h2>
      </div>

      <div className="post">
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
        </div>
      </div>
    </div>
  );
};

export default Top_big_post_component;
