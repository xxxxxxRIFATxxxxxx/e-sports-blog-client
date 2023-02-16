import React from 'react';

const Insta_and_ads = () => {
    return (
        <>

<div className="aside-widget">
                <div className="section-title">
                    <h2 className="title">Instagram</h2>
                </div>
                <div className="galery-widget">
                    <ul>
                        <li>
                            <a href="#">
                                <img src="./img/galery-1.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./img/galery-2.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./img/galery-3.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./img/galery-4.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./img/galery-5.jpg" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="./img/galery-6.jpg" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="aside-widget text-center">
                <a
                    href="#"
                    style={{
                        display: "inline-block",
                        margin: "auto",
                    }}
                >
                    <img
                        className="img-responsive"
                        src="https://preview.colorlib.com/theme/callie/img/ad-1.jpg.webp"
                        alt=""
                    />
                </a>
            </div>

        </>
    );
};

export default Insta_and_ads;