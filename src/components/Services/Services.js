import React from "react";
import SingleService from "./SingleService";
import { servicesdata1, servicesdata2 } from "../../layoutdata";
import "./services.scss";

function Services() {
	const services1 = servicesdata1.map((item) => (
		<SingleService key={item.name} name={item.name} img={item.img} />
	));

	const services2 = servicesdata2.map((item) => (
		<SingleService key={item.name} name={item.name} img={item.img} />
	));

	return (
		<section className='services-section'>
			<div className='services-title'>Our Services</div>
			<div className='services-container'>
				<div className='services-list-container'>
					<div className='service-row-1'>{services1}</div>
					<div className='service-row-2'>{services2}</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
