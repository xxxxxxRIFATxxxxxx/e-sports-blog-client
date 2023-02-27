import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header id="header">
      <div id="nav">
        <div id="nav-top">
          <div className="container">
            <ul className="nav-social">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>

            <div className="nav-logo">
              <a href="index.html" className="logo">
                <img src="./img/logo.png" alt="" />
              </a>
            </div>

            <div className="nav-btns">
              <button className="aside-btn">
                <i className="fa fa-bars"></i>
              </button>
              <button className="search-btn">
                <i className="fa fa-search"></i>
              </button>
              <div id="nav-search">
                <form>
                  <input
                    className="input"
                    name="search"
                    placeholder="Enter your search..."
                  />
                </form>
                <button className="nav-close search-close">
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="nav-bottom">
          <div className="container">
            <ul className="nav-menu">
              <li className="">
                <a href="index.html">হোম</a>
              </li>
              <li className="has-dropdown ">
                <a href="#">ক্যাটেগরীজ</a>
                <div className="dropdown">
                  <div className="dropdown-body">
                    <ul className="dropdown-list">
                      <li>
                        <a href="#">Lifestyle</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">ফিক্সচারস</a>
              </li>
              <li>
                <a href="#">ব্লগস</a>
              </li>
              <li>
                <a href="#">ভিডিও</a>
              </li>
            </ul>
          </div>
        </div>

        <div id="nav-aside">
          <ul className="nav-aside-menu">
            <li>
              <a href="index.html">হোম</a>
            </li>
            <li className="has-dropdown">
              <a>ক্যাটেগরীজ</a>
              <ul className="dropdown">
                <li>
                  <a href="#">ক্যাটেগরীজ ১</a>
                </li>
                <li>
                  <a href="#">ক্যাটেগরীজ ২</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="about.html">এবাউট আস</a>
            </li>
            <li>
              <a href="contact.html">কন্টাক্টস</a>
            </li>
            <li>
              <a href="#">এডভারটাইয়স</a>
            </li>
          </ul>
          <button className="nav-close nav-aside-close">
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
