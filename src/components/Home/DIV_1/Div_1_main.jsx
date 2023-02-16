import React from 'react';
import Recent_post_component from './Recent_post_component';
import "./Div_1_main.css"
import Ads from '../../Common/Ads/Ads';
import Newsletter_component from '../../Common/Newsletter/Newsletter_component';

const Div_1_main = () => {
    return (
        <>
        <div class="section">

    <       div class="container">

                <div class="row">
                    <div class="col-md-8">
                        <Recent_post_component />
                    </div>
                    <div class="col-md-4">
                        <Ads />
                        <Newsletter_component />
                    </div>
                </div>

            </div>

        </div>
        </>
    );
};

export default Div_1_main;