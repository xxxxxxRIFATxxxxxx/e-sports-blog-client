import React from "react";
import Instaapi_component from "../Common/Instaapi/Instaapi_component";
import Newsletter_component from "../Common/Newsletter/Newsletter_component";
import Social_media from "../Common/Social_followers/Social_media";

const Aside_part = () => {
  return (
    <>
      <Social_media />
      {/* <Newsletter_component /> */}
      <Instaapi_component />
    </>
  );
};

export default Aside_part;
