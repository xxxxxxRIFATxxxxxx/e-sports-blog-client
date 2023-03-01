import React from "react";
import { Link } from "react-router-dom";

const ADS_BOTTOM = () => {
  return (
    <div className="aside-widget text-center">
      <Link to={`/`} style={{ display: "inline-block", margin: "auto" }}>
        <img
          className="img-responsive"
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1593&q=80"
          alt=""
        />
      </Link>
    </div>
  );
};

export default ADS_BOTTOM;
