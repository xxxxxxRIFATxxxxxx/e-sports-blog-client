import React from 'react';
import Randompostcomponents from '../../Common/Postcomponents/Randompost/Randompostcomponents';

const ALL_post = () => {
    return (
        <div className="col-md-8">
            <Randompostcomponents />
            <Randompostcomponents />
            <Randompostcomponents />
            <Randompostcomponents />

        <div className="section-row loadmore text-center">
            <a href="#" className="primary-button">Load More</a>
        </div>
    </div>
    );
};

export default ALL_post;