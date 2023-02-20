import React from 'react';
import "./Randompostcomponents.css";


const Randompostcomponents = () => {
    return (
        <div className="post post-row">
        <a className="post-img" href="blog-post.html"><img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1593&q=80" alt="" /></a>
        <div className="post-body">
            <div className="post-category">
                <a href="category.html">Travel</a>
                <a href="category.html">Lifestyle</a>
            </div>
            <h3 className="post-title"><a href="blog-post.html">Mel ut impetus suscipit tincidunt. Cum id
                    ullum laboramus persequeris.</a></h3>
            <ul className="post-meta">
                <li><a href="author.html">John Doe</a></li>
                <li>20 April 2018</li>
            </ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
        </div>
    </div>
    );
};

export default Randompostcomponents;