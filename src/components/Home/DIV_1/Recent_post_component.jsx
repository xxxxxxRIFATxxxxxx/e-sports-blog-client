import { Collapse } from "bootstrap";
import React from "react";
import Bigpostcomponents from "../../Common/Postcomponents/Bigpost/Bigpostcomponents";
import Midpostcomponents from "../../Common/Postcomponents/Midpost/Midpostcomponents";
import CategoryPostContainer from "./CategoryPostContainer";

const Recent_post_component = ({ blogs, categories }) => {
  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h2 className="title">Recent posts</h2>
          </div>
        </div>

        <Bigpostcomponents blog={blogs[0]} />
        <Bigpostcomponents blog={blogs[1]} />

        <div className="clearfix visible-md visible-lg"></div>

        <Bigpostcomponents blog={blogs[2]} />

        <Bigpostcomponents blog={blogs[3]} />
      </div>
      {categories.slice(0, 3).map((item) => {
        return (
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2 className="title">{item?.title}</h2>
              </div>
            </div>
            {[0, 1, 3].map((i) => {
              return <Midpostcomponents blog={blogs[i]} category={item} />;
            })}
          </div>
        );
      })}

      {/* {categories.map((category) => {
        return (
          <CategoryPostContainer key={Math.random()} category={category} />
        );
      })} */}
    </>
  );
};

export default Recent_post_component;
