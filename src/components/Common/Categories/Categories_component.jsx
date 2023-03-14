import React from "react";
import { Link } from "react-router-dom";
import useCategories from "../../../hooks/useCategories";
import "./Categories.css";

const Categories_component = () => {
  const { categories } = useCategories();
  return (
    <div className="aside-widget">
      <div className="section-title">
        <h2 className="title">Categories</h2>
      </div>
      <div className="category-widget">
        <ul>
          {categories?.map((item) => {
            return (
              <li>
                <Link to={`/allblogs?category=${item?.title}`}>
                  {item?.title} <span>40</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories_component;
