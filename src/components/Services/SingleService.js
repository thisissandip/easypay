import React from 'react';

function SingleService({ name, img }) {
	return (
		<div className='single-service'>
			<img
				alt='services'
				src={process.env.PUBLIC_URL + `/imgs/serviceimgs/${img}`}
				className='service-img'></img>
			<div className='single-service-title'>{name}</div>
			<div className='service-des'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quia
				sit animi aspernatur unde!
			</div>
		</div>
	);
}

export default SingleService;
