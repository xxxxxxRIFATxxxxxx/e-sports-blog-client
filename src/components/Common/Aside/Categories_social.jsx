import React from 'react';

const Categories_social = () => {
    return (
       <>

<div className="aside-widget">
                <div className="section-title">
                    <h2 className="title">Categories</h2>
                </div>
                <div className="category-widget">
                    <ul>
                        <li>
                            <a href="#">
                                Lifestyle <span>451</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Fashion <span>230</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Technology <span>40</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Travel <span>38</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                Health <span>24</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


                        <div className="aside-widget">
                <div className="section-title">
                    <h2 className="title">Social Media</h2>
                </div>
                <div className="social-widget">
                    <ul>
                        <li>
                            <a href="#" className="social-facebook">
                                <i className="fa fa-facebook"></i>
                                <span>
                                    21.2K
                                    <br />
                                    Followers
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social-twitter">
                                <i className="fa fa-twitter"></i>
                                <span>
                                    10.2K
                                    <br />
                                    Followers
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="social-google-plus">
                                <i className="fa fa-google-plus"></i>
                                <span>
                                    5K
                                    <br />
                                    Followers
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    

       </>
    );
};

export default Categories_social;