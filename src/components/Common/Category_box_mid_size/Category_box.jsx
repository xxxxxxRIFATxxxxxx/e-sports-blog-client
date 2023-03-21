import "./Category_box.css";

import React from "react";
import { Link } from "react-router-dom";

const Category_box = ({ category }) => {
  return (
    <div className="col-md-4">
      <div className="post post-sm">
        <Link className="post-img" to={`/allblogs?category=${category?.title}`}>
          <img
            src="https://resources.premierleague.com/premierleague/photo/2022/08/30/7e862b44-1844-47ac-87ad-c05e6e063851/1415983298.jpg"
            alt=""
          />
        </Link>
        <div className="post-body">
          <div className="post-category">
            <Link to={`/allblogs?category=${category?.title}`}>
              <h1 className="text_decor">{category?.title}</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category_box;
