import React from 'react';

const Small_post_component = () => {
    return (
        <div class="post post-thumb">
        <a class="post-img" href="blog-post.html"><img src="https://images.unsplash.com/photo-1624072213576-766398edb398?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" /></a>
        <div class="post-body">
            <div class="post-category">
                <a href="category.html">Lifestyle</a>
            </div>
            <h3 class="post-title"><a href="blog-post.html">Sed ut perspiciatis, unde omnis iste natus
                    error sit</a></h3>
            <ul class="post-meta">
                <li><a href="author.html">John Doe</a></li>
                <li>20 April 2018</li>
            </ul>
        </div>
    </div>
    );
};

export default Small_post_component;