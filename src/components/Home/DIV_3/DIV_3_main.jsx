import React from "react";
import ALL_post from "./ALL_post";
import Aside_div_3 from "./Aside_div_3";
import "./DIV_3_main.css";

const DIV_3_main = () => {
  return (
    <>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <ALL_post />
            </div>
            {/* <div className="col-md-4">
              <Aside_div_3 />
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DIV_3_main;
