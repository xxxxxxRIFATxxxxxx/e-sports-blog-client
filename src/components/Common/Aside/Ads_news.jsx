import React from "react";

const Ads_news = () => {
    return (
        <>
        
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
                    src="https://preview.colorlib.com/theme/callie/img/ad-3.jpg.webp"
                    alt=""
                />
            </a>
        </div>



        <div className="aside-widget">
                <div className="section-title">
                    <h2 className="title">Newsletter</h2>
                </div>
                <div className="newsletter-widget">
                    <form>
                        <p>
                            Nec feugiat nisl pretium fusce id velit ut tortor
                            pretium.
                        </p>
                        <input
                            className="input"
                            name="newsletter"
                            placeholder="Enter Your Email"
                        />
                        <button className="primary-button">Subscribe</button>
                    </form>
                </div>
            </div>
        
        </>

    );
};

export default Ads_news;
