import React from 'react';
import Reviews from './Reviews';
import { reviewsdata } from '../../websitedata';

function ReviewSection() {
	const reviewcards = reviewsdata.allreviews.map((item) => (
		<Reviews
			picture={item.picture}
			key={item.name}
			name={item.name}
			pos={item.pos}
			review={item.review}
			highlight={item.highlight}
			stars={item.stars}
		/>
	));
	return (
		<section id={`${reviewsdata.id}`} className='reviews-section'>
			<div className='reviews-section-title'>{reviewsdata.reviewtitle}</div>
			<div className='reviews-section-des'>{reviewsdata.reviewdes}</div>
			<div className='reviews-container'>{reviewcards}</div>
		</section>
	);
}

export default ReviewSection;
