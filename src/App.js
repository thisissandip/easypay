import React from "react";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/HeaderLayout";
import PlanCard from "./components/Plans/PlanCard";
import Services from "./components/Services/Services";
import TeamCard from "./components/Team/TeamCard";
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
			{/* Header Section */}
			<Header />
			{/* Services Section */}
			<Services />
			{/* Basic data - 2 Section */}
			{layoutdatacomp}
			{/* Plan Section */}
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
			{/* Team Section */}
			<section className='team-section'>
				<div className='team-section-title'>Meet the Team</div>
				<div className='team-section-des'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nesciunt
					quae eaque id reiciendis. Suscipit accusamus libero repudiandae nisi
					aperiam?
				</div>
				<div className='team-container'>
					<TeamCard />
					<TeamCard />
					<TeamCard />
					<TeamCard />
				</div>
			</section>
			{/* Review Section */}
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
