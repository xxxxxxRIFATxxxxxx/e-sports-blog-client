import React from "react";
import { Link } from "react-router-dom";

const Small_post_component = ({ blog }) => {
  return (
    // <div
    //   className="post post-thumb"
    //   style={{
    //     backgroundImage: `url("${blog?.thumbnail}")`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //   }}
    // >
    //   <Link className="post-img" to={`/PostDetails?blogId=${blog?._id}`}>
    //     <img style={{ visibility: "hidden" }} src={blog?.thumbnail} alt="" />
    //   </Link>
    //   <div className="post-body">
    //     <div className="post-category">
    //       <Link to={`/`}>{blog?.category}</Link>
    //     </div>
    //     <h3 className="post-title">
    //       <Link to={`/`}>{blog?.title}</Link>
    //     </h3>
    //     <ul className="post-meta">
    //       <li>
    //         <Link to={`/`}>{blog?.author}</Link>
    //       </li>
    //       <li>{blog?.createdAt}</li>
    //     </ul>
    //   </div>
    // </div>

    <div
      style={{
        backgroundImage: `url("${blog?.thumbnail}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "35vh",
      }}
    >
      <div>
        <Link to={`/`}>{blog?.category}</Link>
        <Link to={`/`}>{blog?.title}</Link>
        <Link to={`/`}>{blog?.author}</Link>
        <div>{blog?.createdAt}</div>
      </div>
    </div>
  );
};

export default Small_post_component;
