import React from "react";
import { FaStar } from "react-icons/fa";
import "./reviews.scss";

function Reviews({ name, pos, review, highlight, stars, picture }) {
	return (
		<div className='reviews-card'>
			<div className='review-details'>
				{" "}
				<div className='stars'>
					{
						// Or something else
						[...Array(stars)].map((e, i) => (
							<FaStar key={i} />
						))
					}{" "}
				</div>
				<div className='review-highlight'>{highlight}</div>
				<div className='review-des'>{review}</div>
			</div>

			<div className='review-person-cont'>
				<img
					src={`../../imgs/${picture}`}
					alt='profile picture'
					className='profile-pic'
				/>
				<div className='profile-details'>
					<div className='profile-name'>{name}</div>
					<div className='profile-des'>{pos}</div>
				</div>
			</div>
		</div>
	);
}

export default Reviews;
