import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo_main from "../../../images/logo/Dribble-Digest.png";
import useCategories from "../../../hooks/useCategories";

const Header = () => {
  const { categories } = useCategories();
  return (
    <header id="header">
      <div id="nav">
        <div id="nav-top">
          <div className="container">
            <div className="nav_top_bar">
              <div className="social_icon">
                <ul className="nav-social">
                  <li>
                    <Link
                      to={`https://www.facebook.com/dribble.digest/`}
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </Link>
                  </li>
                  {/* <li>
                                        <Link to={``}>
                                            <i className="fa fa-twitter"></i>
                                        </Link>
                                    </li> */}
                  {/* <li>
                                        <Link to={``}>
                                            <i className="fa fa-google-plus"></i>
                                        </Link>
                                    </li> */}
                  <li>
                    <Link
                      to={`https://www.instagram.com/dribbledigest/`}
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`https://www.youtube.com/@dribbledigest `}
                      target="_blank"
                    >
                      <i class="fa fa-youtube-play" aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="">
                <Link to={`/`}>
                  <img src={logo_main} className="logo_size" />
                </Link>
              </div>

              <div className="">
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
          </div>
        </div>

        <div id="nav-bottom">
          <div className="container">
            <ul className="nav-menu">
              <li className="">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="has-dropdown ">
                <Link to={`/category`}>Football leagues</Link>
                <div className="dropdown">
                  <div className="dropdown-body">
                    <ul className="dropdown-list">
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
              </li>
              <li>
                <Link to={`/fixtures`}>Fixtures</Link>
              </li>
              <li>
                <Link to={`/allblogs`}>BLOGS</Link>
              </li>
              <li>
                <Link to={`/videos`}>VIDEOS</Link>
              </li>
            </ul>
          </div>
        </div>

        <div id="nav-aside">
          <ul className="nav-aside-menu">
            <li>
              <Link to={`/`}>Home</Link>
            </li>
            <li className="has-dropdown">
              <Link to={`/category`}>Football leagues</Link>
              <ul className="dropdown">
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
