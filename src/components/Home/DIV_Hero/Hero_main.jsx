import React from "react";
import "./Hero_main.css";
import Big_post_component from "./Big_post_component";
import Small_post_component from "./Small_post_component";

const Hero_main = ({ blogs }) => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div id="hot-post" className="row hot-post g-5">
            <div className="col-md-8 hot-post-left h-100">
              <Big_post_component blog={blogs[0]} />
            </div>

            <div className="col-md-4 hot-post-right h-100">
              <Small_post_component blog={blogs[1]} />
              <Small_post_component blog={blogs[2]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_main;
