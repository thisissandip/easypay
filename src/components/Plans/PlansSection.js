import React from 'react';
import PlanCard from './PlanCard';
import { plansdata } from '../../websitedata';

function PlansSection() {
	const plancards = plansdata.allplans.map((item) => (
		<PlanCard
			key={item.plantype}
			features={item.features}
			recom={item.recommend}
			plantype={item.plantype}
			price={item.price}
		/>
	));
	return (
		<section id={`${plansdata.id}`} className='plans-section'>
			<div className='plans-section-title'>
				<span className='unlock-title'>{plansdata.planstitle}</span>
			</div>
			<div className='plans-section-des'>{plansdata.plansdesline1}</div>
			<div className='plans-container'>{plancards}</div>
		</section>
	);
}

export default PlansSection;
