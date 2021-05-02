import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/HeaderLayout";
import PlanCard from "./components/Plans/PlanCard";
import Services from "./components/Services/Services";
import TeamCard from "./components/Team/TeamCard";
import Reviews from "./components/Reviews/Reviews";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ/Faq";
import { AiOutlineArrowUp } from "react-icons/ai";
import {
	layoutdata,
	plansdata,
	reviewsdata,
	teamdata,
	faqdata,
} from "./layoutdata";

function App() {
	const [Faqcontent, setFaqcontent] = useState(faqdata);

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

	const teamcard = teamdata.map((item) => (
		<TeamCard key={item.name} name={item.name} pic={item.pic} pos={item.pos} />
	));

	const toggleFAQ = (theindex) => {
		setFaqcontent(
			Faqcontent.map((item, i) => {
				if (i === theindex) {
					item.open = !item.open;
				} else {
					item.open = false;
				}
				return item;
			})
		);
	};

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const topbtn = document.querySelector(".back-to-top-btn");
			if (window.pageYOffset > 300) {
				topbtn.style.display = "flex";
			} else {
				topbtn.style.display = "none";
			}
		});
	}, []);

	return (
		<div className='App'>
			<div className='back-to-top-btn'>
				<AiOutlineArrowUp
					onClick={() => {
						document.querySelector("#header").scrollIntoView();
					}}
				/>
			</div>
			{/* Navbar */}
			{/* Header Section */}
			<Header />
			{/* Services Section */}
			<Services />
			{/* Basic data - 2 Section */}
			{layoutdatacomp}
			{/* Plan Section */}
			<section id='plans' className='plans-section'>
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
			<section id='team' className='team-section'>
				<div className='team-section-title'>Meet the Team</div>
				<div className='team-section-des'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nesciunt
					quae eaque id reiciendis. Suscipit accusamus libero repudiandae nisi
					aperiam?
				</div>
				<div className='team-container'>{teamcard}</div>
			</section>
			{/* Review Section */}
			<section id='reviews' className='reviews-section'>
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
			{/* FAQ Section */}
			<section id='faq' className='faq-section'>
				<div className='faq-section-title'>Frequently Asked Questions</div>
				<div className='faq-section-des'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nesciunt
					quae eaque id reiciendis. Suscipit accusamus libero repudiandae nisi
					aperiam?
				</div>
				<div className='faq-cont'>
					{Faqcontent.map((item, i) => (
						<FAQ
							key={i}
							myindex={i}
							question={item.ques}
							ans={item.ans}
							open={item.open}
							toggleFAQ={toggleFAQ}
						/>
					))}
				</div>
				<div className='faq-foot'>
					Haven't find suitable answer? Ask us below what you need.
				</div>
			</section>
			{/* Contact Section */}
			<section id='contact' className='contact-section'>
				<div className='contact-section-title'>Contact Us</div>
				<div className='contact-section-des'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui nesciunt
					quae eaque id reiciendis. Suscipit accusamus libero repudiandae nisi
					aperiam?
				</div>
				<Contact />
			</section>
			{/* Footer Section */}
			<Footer />
		</div>
	);
}

export default App;
