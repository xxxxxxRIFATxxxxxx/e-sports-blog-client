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
          <Link to={`PostDetails?blogId=${blog?._id}`}>{blog?.category}</Link>
        </div>
        <h3 className="post-title">
          <Link to={`/PostDetails?blogId=${blog?._id}`}>{blog?.title}</Link>
        </h3>
        <ul className="post-meta">
          {/* <li>
            <Link to={`/PostDetails?blogId=${blog?._id}`}>{blog?.author}</Link>
          </li> */}
          <li>{blog?.createdAt}</li>
        </ul>
        {blog?.description.slice(0, 100)}..
      </div>
    </div>
  );
};

export default Randompostcomponents;
