import React from 'react';
import "./Instaapi.css";

const Instaapi_component = () => {
    return (
        <div className="aside-widget">
        <div className="section-title">
            <h2 className="title">Instagram</h2>
        </div>
        <div className="galery-widget">
            <ul>
                <li><a href="#"><img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1593&q=80" alt=""/></a></li>
                <li><a href="#"><img src="./img/galery-2.jpg" alt=""/></a></li>
                <li><a href="#"><img src="./img/galery-3.jpg" alt=""/></a></li>
                <li><a href="#"><img src="./img/galery-4.jpg" alt=""/></a></li>
                <li><a href="#"><img src="./img/galery-5.jpg" alt=""/></a></li>
                <li><a href="#"><img src="./img/galery-6.jpg" alt=""/></a></li>
            </ul>
        </div>
    </div>
    );
};

export default Instaapi_component;