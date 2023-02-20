import React from 'react';
import "./Bigpostcomponents.css";

const Bigpostcomponents = () => {
    return (
        <div className="col-md-6">
        <div className="post">
            <a className="post-img" href="blog-post.html"><img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1593&q=80" alt="" /></a>
            <div className="post-body">
                <div className="post-category">
                    <a href="category.html">Travel</a>
                </div>
                <h3 className="post-title"><a href="blog-post.html">Sed ut perspiciatis, unde omnis iste
                        natus error sit</a></h3>
                <ul className="post-meta">
                    <li><a href="author.html">John Doe</a></li>
                    <li>20 April 2018</li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Bigpostcomponents;