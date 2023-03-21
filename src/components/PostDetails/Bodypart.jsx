import React from "react";
import { Link } from "react-router-dom";

const Bodypart = ({ blog, user }) => {
  return (
    <div>
      <div class="section-row">
        <div class="post-share">
          <Link
            to={`https://www.facebook.com/dribble.digest/`}
            class="social-facebook"
          >
            <i class="fa fa-facebook"></i>
            <span>Share</span>
          </Link>
          <Link
            to={`https://www.instagram.com/dribbledigest/`}
            class="social-instagram"
          >
            <i class="fa fa-instagram"></i>
            <span>Share</span>
          </Link>
          <Link
            to={`https://www.youtube.com/@dribbledigest`}
            class="social-google-plus"
          >
            <i class="fa fa-youtube-play"></i>
            <span>Share</span>
          </Link>
        </div>
      </div>

      <div class="section-row">{blog?.description}</div>

      <div class="section-row">
        <div class="post-tags">
          <ul>
            <li>TAGS:</li>
            <li>
              <Link to={``}>Social</Link>
            </li>
            <li>
              <Link to={``}>Lifestyle</Link>
            </li>
            <li>
              <Link to={``}>Fashion</Link>
            </li>
            <li>
              <Link to={``}>Health</Link>
            </li>
          </ul>
        </div>
      </div>

      <div class="section-row">
        <div class="section-title">
          <h3 class="title">
            About <Link>{user?.firstName}</Link>
          </h3>
        </div>
        <div class="author media">
          <div class="media-left">
            <Link to={``}>
              <img class="author-img media-object" src={user?.image} alt="" />
            </Link>
          </div>
          <div class="media-body">
            <p>{user?.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodypart;
