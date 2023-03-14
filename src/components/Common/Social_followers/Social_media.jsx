import React from "react";
import { Link } from "react-router-dom";
import "./Social_media.css";

const Social_media = () => {
  return (
    <div className="aside-widget">
      <div className="section-title">
        <h2 className="title">Social Media</h2>
      </div>
      <div className="social-widget">
        <ul>
          <li>
            <Link
              to={`https://www.facebook.com/dribble.digest/`}
              className="social-facebook"
              target="_blank"
            >
              <i className="fa fa-facebook"></i>
              <span>
                3K
                <br />
                Followers
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={`https://www.instagram.com/dribbledigest/`}
              className="social-instagram"
              target="_blank"
            >
              <i className="fa fa-instagram"></i>
              <span>
                2K
                <br />
                Followers
              </span>
            </Link>
          </li>
          <li>
            <Link
              to={`https://www.youtube.com/@dribbledigest`}
              className="social-google-plus"
              target="_blank"
            >
              <i className="fa fa-youtube-play"></i>
              <span>
                5K
                <br />
                Subcribers
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Social_media;
