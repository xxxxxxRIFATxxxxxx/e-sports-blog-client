import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo_main from "../../../images/logo/Dribble-Digest-white.png";
import useCategories from "../../../hooks/useCategories";
import Newsletter_component from "../Newsletter/Newsletter_component";
import Instaapi_component from "../Instaapi/Instaapi_component";

const Footer = () => {
  const { categories } = useCategories();
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-widget">
              <div className="footer-logo image_align">
                <Link to={``} className="logo">
                  <img src={logo_main} className="size_logo" alt="" />
                </Link>
              </div>
              <p>
                আমার স্পোর্টস ব্লগ সাইট সম্পর্কে 100 লাইনের বিষয়বস্তু: আমি
                বিশ্বাস করি যে আমার স্পোর্টস ব্লগ সাইটটি আপনাদের সামগ্রিক আশ্রয়
              </p>
              <ul className="contact-social">
                <li>
                  <Link
                    to={`https://www.facebook.com/dribble.digest/`}
                    className="social-facebook"
                    target="_blank"
                  >
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                {/* <li>
                  <Link to={``} className="social-twitter">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li> */}
                {/* <li>
                  <Link to={``} className="social-google-plus">
                    <i className="fa fa-google-plus"></i>
                  </Link>
                </li> */}
                <li>
                  <Link
                    to={`https://www.instagram.com/dribbledigest/`}
                    className="social-instagram"
                    target="_blank"
                  >
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to={`https://www.youtube.com/@dribbledigest`}
                    className="social-google-plus"
                    target="_blank"
                  >
                    <i className="fa fa-youtube-play"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-widget">
              <h3 className="footer-title">Categories</h3>
              <div className="category-widget">
                <ul>
                  {categories?.map((item) => {
                    return (
                      <li>
                        <Link to={`/allblogs?category=${item?.title}`}>
                          {item?.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footer-widget">
              <h3 className="footer-title">Tags</h3>
              <div className="tags-widget">
                <ul>
                  {[1, 2, 3].map((item) => {
                    return (
                      <li>
                        <Link to={``}>#Social{item}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          {/* <div className="col-md-3">
            <Instaapi_component />
          </div> */}
        </div>

        <div className="footer-bottom row">
          <div className="col-md-6 col-md-push-6">
            <ul className="footer-nav">
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/about`}>About Us</Link>
              </li>
              <li>
                <Link to={`/contact`}>Contacts</Link>
              </li>
              <li>
                <Link to={`/advertise`}>Advertise</Link>
              </li>
              {/* <li>
                                <Link to={``}>Privacy</Link>
                            </li> */}
            </ul>
          </div>
          <div className="col-md-6 col-md-pull-6">
            <div className="footer-copyright">
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | by Awsdyn <Link to={``}></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
