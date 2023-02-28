import React from "react";

const Bodypart = ({ blog }) => {
  return (
    <div>
      <div class="section-row">
        <div class="post-share">
          <a href="#" class="social-facebook">
            <i class="fa fa-facebook"></i>
            <span>Share</span>
          </a>
          <a href="#" class="social-twitter">
            <i class="fa fa-twitter"></i>
            <span>Tweet</span>
          </a>
          <a href="#" class="social-pinterest">
            <i class="fa fa-pinterest"></i>
            <span>Pin</span>
          </a>
          <a href="#">
            <i class="fa fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </div>

      <div class="section-row">{blog?.description}</div>

      <div class="section-row">
        <div class="post-tags">
          <ul>
            <li>TAGS:</li>
            <li>
              <a href="#">Social</a>
            </li>
            <li>
              <a href="#">Lifestyle</a>
            </li>
            <li>
              <a href="#">Fashion</a>
            </li>
            <li>
              <a href="#">Health</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="section-row">
        <div class="section-title">
          <h3 class="title">
            About <a href="author.html">সাদনিমা আমিন</a>
          </h3>
        </div>
        <div class="author media">
          <div class="media-left">
            <a href="author.html">
              <img class="author-img media-object" src="" alt="" />
            </a>
          </div>
          <div class="media-body">
            <p>
              আমার জন্ম ভারতের মুম্বই শহরে হয়েছে এবং আমি একটি সফল মডেল হিসাবে
              জানা হয়। আমি বলিউডে একটি প্রতিষ্ঠিত নাম হিসেবে উল্লেখযোগ্য হয়েছি
              এবং আমার কাছে পরিচিত সুপারস্টারদের মধ্যে শাহরুখ খান, সালমান খান
              এবং আমিতাভ বচ্চন রয়েছে। আমার উপর প্রতিযোগিতামূলক প্রয়াসের ফলে
              আমি এখন বলিউডের একটি জনপ্রিয় নাম।
            </p>
            <ul class="author-social">
              <li>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bodypart;
