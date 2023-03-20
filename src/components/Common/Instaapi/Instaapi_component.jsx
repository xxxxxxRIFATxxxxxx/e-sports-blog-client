import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Instaapi.css";
import insta_photo from "../../../images/instalogo/insta_post.png";
import useInsta from "../../../hooks/useInsta";
import useCategories from "../../../hooks/useCategories";

const Instaapi_component = () => {
  // const { post } = useCategories();
  const post = [0, 1, 2, 3, 4, 5];
  return (
    <div className="aside-widget">
      <div className="section-title">
        <h2 className="title">Instagram</h2>
      </div>
      <div className="galery-widget">
        <ul>
          {post.map((item) => {
            return (
              <li>
                <Link to={`#`} target="_blank">
                  <img src={insta_photo} className="insta_post_pading" alt="" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Instaapi_component;
