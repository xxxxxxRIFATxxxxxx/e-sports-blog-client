import React from 'react';
import Bigpostcomponents from '../../Common/Postcomponents/Bigpost/Bigpostcomponents';
import Midpostcomponents from '../../Common/Postcomponents/Midpost/Midpostcomponents';

const Recent_post_component = () => {
    return (
        <>
            <div className="row">
						<div className="col-md-12">
							<div className="section-title">
								<h2 className="title">Recent posts</h2>
							</div>
						</div>


						<Bigpostcomponents />
						<Bigpostcomponents />


						<div className="clearfix visible-md visible-lg"></div>

						<Bigpostcomponents />

						<Bigpostcomponents />

			</div>



			<div className="row">
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Lifestyle</h2>
					</div>
				</div>

				<Midpostcomponents />
				<Midpostcomponents />
				<Midpostcomponents />


			</div>


			<div className="row">
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Fashion & Travel</h2>
					</div>
				</div>

				<Midpostcomponents />
				<Midpostcomponents />
				<Midpostcomponents />

			</div>


			<div className="row">
				<div className="col-md-12">
					<div className="section-title">
						<h2 className="title">Technology & Health</h2>
					</div>
				</div>

				<Midpostcomponents />
				<Midpostcomponents />
				<Midpostcomponents />

			</div>
        </>
    );
};

export default Recent_post_component;