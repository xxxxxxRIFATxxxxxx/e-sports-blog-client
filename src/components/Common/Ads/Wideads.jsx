import React from "react";
import { Link } from "react-router-dom";
import "./Wideads.css";

const Wideads = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 section-row text-center">
            <Link to={`/`} style={{ display: "inline-block", margin: "auto" }}>
              <img
                className="img-responsive"
                src="https://www.themediaant.com/blog/wp-content/uploads/2017/08/marathonfootball-768x497.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wideads;
