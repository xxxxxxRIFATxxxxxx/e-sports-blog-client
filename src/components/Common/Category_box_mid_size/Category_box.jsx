import "./Category_box.css";

import React from "react";
import { Link } from "react-router-dom";

const Category_box = ({ category }) => {
  return (
    <div className="col-md-4">
      <div className="post post-sm">
        <Link className="post-img" to={`/PostDetails?blogId=${category?._id}`}>
          <img
            src="https://www.reuters.com/resizer/NQDAAV4F_rXWwOthTmfdCMGnKqM=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XVOLPTTQ7NLIHEDUTBC24JEXJM.jpg"
            alt=""
          />
        </Link>
        <div className="post-body">
          <div className="post-category">
            <Link to={`/`}>{category?.title}</Link>
          </div>
          <h3 className="post-title title-sm">
            <Link to={`/`}>{category?.title}</Link>
          </h3>
          <ul className="post-meta">
            <li>
              <Link to={`/`}>{category?.title}</Link>
            </li>
            <li>{category?.createdAt}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category_box;
