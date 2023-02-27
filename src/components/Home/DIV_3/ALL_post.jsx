import React from "react";
import Randompostcomponents from "../../Common/Postcomponents/Randompost/Randompostcomponents";

const ALL_post = ({ blogs }) => {
  return (
    <div className="col-md-8">
      {blogs.map((item) => {
        return <Randompostcomponents key={Math.random()} blog={item} />;
      })}

      <div className="section-row loadmore text-center">
        <a href="#" className="primary-button">
          Load More
        </a>
      </div>
    </div>
  );
};

export default ALL_post;
