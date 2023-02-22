import React from "react";
import "./PostDetails.css";

import Header from "../Common/Header/Header";
import Heropart from "./Heropart";
import Bodypart from "./Bodypart";
import Midpostcomponents from "../Common/Postcomponents/Midpost/Midpostcomponents";
import Aside_part from "./Aside_part";
import Footer from "../Common/Footer/Footer";

const PostDetails = () => {
  return (
    <>
      <Header />
      <Heropart />
      <div class="section">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <Bodypart />
              <div>
                <div class="section-title">
                  <h3 class="title">Related Posts</h3>
                </div>
                <div class="row">
                  <Midpostcomponents />
                  <Midpostcomponents />
                  <Midpostcomponents />
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <Aside_part />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostDetails;
