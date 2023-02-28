import React from "react";
import "./Categories.css";

const Categories_component = (categories) => {
  console.log(categories);
  return (
    <div className="aside-widget">
      <div className="section-title">
        <h2 className="title">Categories</h2>
      </div>
      <div className="category-widget">
        <ul>
          {categories.categories.map((item) => {
            return (
              <li>
                <a href="#">
                  {item?.title} <span>40</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories_component;
