import React from 'react';
import "./Social_media.css";

const Social_media = () => {
    return (
        <div className="aside-widget">
        <div className="section-title">
            <h2 className="title">Social Media</h2>
        </div>
        <div className="social-widget">
            <ul>
                <li>
                    <a href="#" className="social-facebook">
                        <i className="fa fa-facebook"></i>
                        <span>21.2K<br />Followers</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="social-twitter">
                        <i className="fa fa-twitter"></i>
                        <span>10.2K<br />Followers</span>
                    </a>
                </li>
                <li>
                    <a href="#" className="social-google-plus">
                        <i className="fa fa-google-plus"></i>
                        <span>5K<br />Followers</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    );
};

export default Social_media;