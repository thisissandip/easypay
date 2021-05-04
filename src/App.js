import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import InfoSection from './components/InfoSection/InfoSection';
import PlansSection from './components/Plans/PlansSection';
import Services from './components/Services/Services';
import TeamSection from './components/Team/TeamSection';
import ReviewSection from './components/Reviews/ReviewSection';
import Footer from './components/Footer/Footer';
import FaqSection from './components/FAQ/FaqSection';
import { AiOutlineArrowUp } from 'react-icons/ai';

function App() {
	useEffect(() => {
		window.addEventListener('scroll', () => {
			const topbtn = document.querySelector('.back-to-top-btn');
			if (window.pageYOffset > 300) {
				topbtn.style.display = 'flex';
			} else {
				topbtn.style.display = 'none';
			}
		});
	}, []);

	return (
		<div className='App'>
			<div className='back-to-top-btn'>
				<AiOutlineArrowUp
					onClick={() => {
						document.querySelector('#header').scrollIntoView();
					}}
				/>
			</div>

			{/* Navbar and Header Section */}
			<Header />

			{/* Services Section */}
			<Services />

			{/*2 Sections based on 1 layout */}
			<InfoSection />

			{/* Plan Section */}
			<PlansSection />

			{/* Team Section */}
			<TeamSection />

			{/* Review Section */}
			<ReviewSection />

			{/* FAQ Section */}
			<FaqSection />

			{/* Footer Section */}
			<Footer />
		</div>
	);
}

export default App;
