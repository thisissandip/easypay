import React from "react";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/HeaderLayout";
import PlanCard from "./components/Plans/PlanCard";
import Services from "./components/Services/Services";
import Themes from "./components/Themes/Themes";
import Reviews from "./components/Reviews/Reviews";
import { layoutdata, plansdata, reviewsdata } from "./layoutdata";

function App() {
	console.log(layoutdata);
	const layoutdatacomp = layoutdata.map((item) => (
		<Layout
			key={item.layoutname}
			layoutname={item.layoutname}
			title={item.title}
			des={item.des}
			bg={item.background}
			displaybuttons={item.button}
			imgname={item.imgname}
			imgclassname={item.imgclassname}
			mycolor={item.color}
			features={item.features}
		/>
	));

	const plancards = plansdata.map((item) => (
		<PlanCard
			key={item.plantype}
			features={item.features}
			recom={item.recommend}
			plantype={item.plantype}
			price={item.price}
		/>
	));

	const reviewcards = reviewsdata.map((item) => (
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
		<div className='App'>
			<Header />
			<Services />
			{layoutdatacomp}
			<section className='plans-section'>
				<div className='plans-section-title'>
					Unlock Full Power Of Our Services
				</div>
				<div className='plans-section-des'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nesciunt
					quae eaque id reiciendis. <br></br> Suscipit accusamus libero
					repudiandae nisi aperiam?
				</div>
				<div className='plans-container'>{plancards}</div>
			</section>
			{/* 	<section className='themes-section'></section> */}
			<section className='reviews-section'>
				<div className='reviews-section-title'>
					What Our Customers Are Saying
				</div>
				<div className='reviews-section-des'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nesciunt
					quae eaque id reiciendis. Suscipit accusamus libero repudiandae nisi
					aperiam?
				</div>
				<div className='reviews-container'>{reviewcards}</div>
			</section>
		</div>
	);
}

export default App;
