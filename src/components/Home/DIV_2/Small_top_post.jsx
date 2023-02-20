import React from 'react';
import Smallpostcomponents from '../../Common/Postcomponents/Smallpost/Smallpostcomponents';

const Small_top_post = () => {
    return (
       <>
			<div className="row">
				<div className="col-md-4">
                    <Smallpostcomponents />
                    <Smallpostcomponents />
                    <Smallpostcomponents />
				</div>
				<div className="col-md-4">
                    <Smallpostcomponents />
                    <Smallpostcomponents />
                    <Smallpostcomponents />
				</div>
				<div className="col-md-4">
                    <Smallpostcomponents />
                    <Smallpostcomponents />
                    <Smallpostcomponents />					
				</div>
			</div>

       </>
    );
};

export default Small_top_post;