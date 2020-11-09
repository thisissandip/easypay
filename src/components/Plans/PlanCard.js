import React from "react";
import "./plans.scss";
import { FcCheckmark } from "react-icons/fc";
import { MdClose } from "react-icons/md";

function PlanCard({ features, recom, plantype, price }) {
	return (
		<div
			className={recom ? `plan-card-container recom` : `plan-card-container`}>
			<div className='plan-type'>{plantype}</div>
			<div className='price-tag'>
				<span className='dollar-sign'>$</span>
				<span className='price'>{price}</span>
				<span className='month'>/mo</span>
			</div>

			<div className='features-container'>
				{features.map((i) => (
					<div key={i.name} className='single-feature'>
						<span className='feature-true'>
							{i.included ? (
								<FcCheckmark />
							) : (
								<MdClose className='cross-icon' />
							)}
						</span>{" "}
						{i.name}
					</div>
				))}
			</div>
			<button className='add-to-cart'>Add to Cart</button>
		</div>
	);
}

export default PlanCard;
