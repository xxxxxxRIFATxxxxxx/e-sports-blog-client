import React from "react";
import "./Header.css";

const Header = () => {
    return 	<header id="header">

		<div id="nav">

			<div id="nav-top">
				<div className="container">

					<ul className="nav-social">
						<li><a href="#"><i className="fa fa-facebook"></i></a></li>
						<li><a href="#"><i className="fa fa-twitter"></i></a></li>
						<li><a href="#"><i className="fa fa-google-plus"></i></a></li>
						<li><a href="#"><i className="fa fa-instagram"></i></a></li>
					</ul>


					<div className="nav-logo">
						<a href="index.html" className="logo"><img src="./img/logo.png" alt=""/></a>
					</div>


					<div className="nav-btns">
						<button className="aside-btn"><i className="fa fa-bars"></i></button>
						<button className="search-btn"><i className="fa fa-search"></i></button>
						<div id="nav-search">
							<form>
								<input className="input" name="search" placeholder="Enter your search..."/>
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
						<li className="has-dropdown">
							<a href="index.html">Home</a>
							<div className="dropdown">
								<div className="dropdown-body">
									<ul className="dropdown-list">
										<li><a href="category.html">Category page</a></li>
										<li><a href="blog-post.html">Post page</a></li>
										<li><a href="author.html">Author page</a></li>
										<li><a href="about.html">About Us</a></li>
										<li><a href="contact.html">Contacts</a></li>
										<li><a href="blank.html">Regular</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li className="has-dropdown megamenu">
							<a href="#">Lifestyle</a>
						</li>
						<li className="has-dropdown megamenu">
							<a href="#">Fashion</a>
							<div className="dropdown">
								<div className="dropdown-body">
									<div className="row">
										<div className="col-md-3">
											<h4 className="dropdown-heading">Categories</h4>
											<ul className="dropdown-list">
												<li><a href="#">Lifestyle</a></li>
												<li><a href="#">Fashion</a></li>
												<li><a href="#">Technology</a></li>
												<li><a href="#">Health</a></li>
												<li><a href="#">Travel</a></li>
											</ul>
										</div>
										<div className="col-md-3">
											<h4 className="dropdown-heading">Lifestyle</h4>
											<ul className="dropdown-list">
												<li><a href="#">Lifestyle</a></li>
												<li><a href="#">Fashion</a></li>
												<li><a href="#">Health</a></li>
											</ul>
											<h4 className="dropdown-heading">Technology</h4>
											<ul className="dropdown-list">
												<li><a href="#">Lifestyle</a></li>
												<li><a href="#">Travel</a></li>
											</ul>
										</div>
										<div className="col-md-3">
											<h4 className="dropdown-heading">Fashion</h4>
											<ul className="dropdown-list">
												<li><a href="#">Fashion</a></li>
												<li><a href="#">Technology</a></li>
											</ul>
											<h4 className="dropdown-heading">Travel</h4>
											<ul className="dropdown-list">
												<li><a href="#">Lifestyle</a></li>
												<li><a href="#">Healtth</a></li>
												<li><a href="#">Fashion</a></li>
											</ul>
										</div>
										<div className="col-md-3">
											<h4 className="dropdown-heading">Health</h4>
											<ul className="dropdown-list">
												<li><a href="#">Technology</a></li>
												<li><a href="#">Fashion</a></li>
												<li><a href="#">Health</a></li>
												<li><a href="#">Travel</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li><a href="#">Technology</a></li>
						<li><a href="#">Health</a></li>
						<li><a href="#">Travel</a></li>
					</ul>

				</div>
			</div>


			<div id="nav-aside">
				<ul className="nav-aside-menu">
					<li><a href="index.html">Home</a></li>
					<li className="has-dropdown"><a>Categories</a>
						<ul className="dropdown">
							<li><a href="#">Lifestyle</a></li>
							<li><a href="#">Fashion</a></li>
							<li><a href="#">Technology</a></li>
							<li><a href="#">Travel</a></li>
							<li><a href="#">Health</a></li>
						</ul>
					</li>
					<li><a href="about.html">About Us</a></li>
					<li><a href="contact.html">Contacts</a></li>
					<li><a href="#">Advertise</a></li>
				</ul>
				<button className="nav-close nav-aside-close"><span></span></button>
			</div>

		</div>

	</header>
};

export default Header;
