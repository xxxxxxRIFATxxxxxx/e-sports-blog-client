import React from 'react';
import "./Smallpostcomponents.css";

const Smallpostcomponents = () => {
    return (
        <div className="post post-widget">
        <a className="post-img" href="blog-post.html"><img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1593&q=80" alt=""/></a>
        <div className="post-body">
            <div className="post-category">
                <a href="category.html">Travel</a>
            </div>
            <h3 className="post-title"><a href="blog-post.html">Postea senserit id eos, vivendo periculis ei
                    qui</a></h3>
        </div>
    </div>

    );
};

export default Smallpostcomponents;