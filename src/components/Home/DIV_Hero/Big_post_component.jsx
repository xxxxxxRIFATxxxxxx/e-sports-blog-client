import React from "react";
import { Link } from "react-router-dom";

const Big_post_component = ({ blog_id }) => {
  return (
    <div className="post post-thumb">
      <Link className="post-img" to={`/PostDetails?blogId=${blog_id}`}>
        <img
          src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
      </Link>
      <div className="post-body">
        <div className="post-category">
          <a href="category.html">Lifestyle</a>
        </div>
        <h3 className="post-title title-lg">
          <a href="blog-post.html">
            Postea senserit id eos, vivendo periculis ei qui
          </a>
        </h3>
        <ul className="post-meta">
          <li>
            <a href="author.html">John Doe</a>
          </li>
          <li>20 April 2018</li>
        </ul>
      </div>
    </div>
  );
};

export default Big_post_component;
