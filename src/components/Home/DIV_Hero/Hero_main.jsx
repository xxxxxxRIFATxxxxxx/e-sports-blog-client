import React from "react";
import "./Hero_main.css";
import Big_post_component from "./Big_post_component";
import Small_post_component from "./Small_post_component";

const Hero_main = ({ blogs }) => {
  console.log(blogs);
  return (
    <>
      <div className="section">
        <div className="container">
          <div id="hot-post" className="row hot-post g-5">
            <div className="col-md-8 hot-post-left">
              <Big_post_component blog={blogs[0]} />
            </div>

            <div className="col-md-4 hot-post-right">
              <Small_post_component />
              <Small_post_component />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_main;
