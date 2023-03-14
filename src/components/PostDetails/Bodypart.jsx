import React from "react";
import { Link } from "react-router-dom";

const Bodypart = ({ blog }) => {
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
            About <Link>সাদনিমা আমিন</Link>
          </h3>
        </div>
        <div class="author media">
          <div class="media-left">
            <Link to={``}>
              <img class="author-img media-object" src="" alt="" />
            </Link>
          </div>
          <div class="media-body">
            <p>
              আমার জন্ম ভারতের মুম্বই শহরে হয়েছে এবং আমি একটি সফল মডেল হিসাবে
              জানা হয়। আমি বলিউডে একটি প্রতিষ্ঠিত নাম হিসেবে উল্লেখযোগ্য হয়েছি
              এবং আমার কাছে পরিচিত সুপারস্টারদের মধ্যে শাহরুখ খান, সালমান খান
              এবং আমিতাভ বচ্চন রয়েছে। আমার উপর প্রতিযোগিতামূলক প্রয়াসের ফলে
              আমি এখন বলিউডের একটি জনপ্রিয় নাম।
            </p>
            {/* <ul class="author-social">
              <li>
                <Link to={`https://www.facebook.com/dribble.digest/`}>
                  <i class="fa fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link to={``}>
                  <i class="fa fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link to={`https://www.instagram.com/dribbledigest/`}>
                  <i class="fa fa-instagram"></i>
                </Link>
              </li>
              <li>
                <Link to={`https://www.youtube.com/@dribbledigest `}>
                  <i class="fa fa-youtube-play"></i>
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodypart;
