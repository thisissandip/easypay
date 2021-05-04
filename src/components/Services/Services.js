import React from 'react';
import SingleService from './SingleService';
import { servicesdata } from '../../websitedata';
import './services.scss';

function Services() {
	const services1 = servicesdata.allservices.map((item) => (
		<SingleService key={item.name} name={item.name} img={item.img} />
	));

	return (
		<section id={`${servicesdata.id}`} className='services-section'>
			<div className='services-parent-container'>
				<div className='services-title'>{servicesdata.servicestitle}</div>
				<div className='services-container'>
					<div className='services-list-container'>
						<div className='service-row-1'>{services1}</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
