import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo_main from "../../../images/logo/Dribble-Digest.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-widget">
              <div className="footer-logo">
                <Link to={`/`} className="logo">
                  <img src="" alt="" />
                </Link>
              </div>
              <p>
                Nec feugiat nisl pretium fusce id velit ut tortor pretium. Nisl
                purus in mollis nunc sed. Nunc non blandit massa enim nec.
              </p>
              <ul className="contact-social">
                <li>
                  <Link to={`/`} className="social-facebook">
                    <i className="fa fa-facebook"></i>
                  </Link>
                </li>
                <li>
                  <Link to={`/`} className="social-twitter">
                    <i className="fa fa-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link to={`/`} className="social-google-plus">
                    <i className="fa fa-google-plus"></i>
                  </Link>
                </li>
                <li>
                  <Link to={`/`} className="social-instagram">
                    <i className="fa fa-instagram"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget">
              <h3 className="footer-title">Categories</h3>
              <div className="category-widget">
                <ul>
                  <li>
                    <Link to={`/`}>
                      Lifestyle <span>451</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/`}>
                      Fashion <span>230</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/`}>
                      Technology <span>40</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/`}>
                      Travel <span>38</span>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/`}>
                      Health <span>24</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget">
              <h3 className="footer-title">Tags</h3>
              <div className="tags-widget">
                <ul>
                  <li>
                    <Link to={`/`}>Social</Link>
                  </li>
                  <li>
                    <Link to={`/`}>Lifestyle</Link>
                  </li>
                  <li>
                    <Link to={`/`}>Blog</Link>
                  </li>
                  <li>
                    <Link to={`/`}>Travel</Link>
                  </li>
                  <li>
                    <Link to={`/`}>Technology</Link>
                  </li>
                  <li>
                    <Link to={`/`}>Fashion</Link>
                  </li>
                  <li>
                    <Link to={`/`}>Life</Link>
                  </li>
                  <li>
                    <Link to={`/`}>News</Link>
                  </li>
                  <li>
                    <Link to={`/`}>Magazine</Link>
                  </li>
                  <li>
                    <Link to={`/`}>Food</Link>
                  </li>
                  <li>
                    <Link to={`/`}>Health</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-widget">
              <h3 className="footer-title">Newsletter</h3>
              <div className="newsletter-widget">
                <form>
                  <p>
                    Nec feugiat nisl pretium fusce id velit ut tortor pretium.
                  </p>
                  <input
                    className="input"
                    name="newsletter"
                    placeholder="Enter Your Email"
                  />
                  <button className="primary-button">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom row">
          <div className="col-md-6 col-md-push-6">
            <ul className="footer-nav">
              <li>
                <Link to={`/`}>Home</Link>
              </li>
              <li>
                <Link to={`/`}>About Us</Link>
              </li>
              <li>
                <Link to={`/`}>Contacts</Link>
              </li>
              <li>
                <Link to={`/`}>Advertise</Link>
              </li>
              <li>
                <Link to={`/`}>Privacy</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-md-pull-6">
            <div className="footer-copyright">
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{" "}
              <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
              <Link to={`/`}></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
