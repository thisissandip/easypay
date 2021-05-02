import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import './navbar.scss';

function Navbar() {
	const [navbarbg, setnavbarbg] = useState(null);

	const scrollToDiv = (id) => {
		let top = document.querySelector(`#${id}`).offsetTop;
		let mytop = top - 50;
		window.scrollTo(0, mytop);
	};

	const showmenu = () => {
		const sidebar = document.querySelector('.nav-links');
		sidebar.style.right = '0%';
	};

	const hidemenu = () => {
		const sidebar = document.querySelector('.nav-links');
		sidebar.style.right = '-100%';
		/* sidebar.style.display = "none"; */
	};

	window.onscroll = () => {
		document.scrollingElement.scrollTop > 40
			? setnavbarbg(true)
			: setnavbarbg(false);
	};

	return (
		<nav className={navbarbg && `nav-bg`}>
			<div className={navbarbg ? `nav-cont scrolled` : `nav-cont`}>
				<div className='logo'>
					<a
						href='#header'
						onClick={() => {
							scrollToDiv('header');
							hidemenu();
						}}>
						EasyPay
					</a>
				</div>
				<FiMenu onClick={showmenu} className='ham-btn' />
				<ul className='nav-links'>
					<GrClose onClick={hidemenu} className='menu-close-btn' />

					<li className='nav-item'>
						<a
							onClick={() => {
								scrollToDiv('services');
								hidemenu();
							}}>
							Services
						</a>
					</li>
					<li className='nav-item'>
						<a
							onClick={() => {
								scrollToDiv('plans');
								hidemenu();
							}}>
							Pricing
						</a>
					</li>
					<li className='nav-item'>
						<a
							onClick={() => {
								scrollToDiv('team');
								hidemenu();
							}}>
							Team
						</a>
					</li>
					<li className='nav-item'>
						<a
							onClick={() => {
								scrollToDiv('reviews');
								hidemenu();
							}}>
							Reviews
						</a>
					</li>
					<li className='nav-item'>
						<a
							onClick={() => {
								scrollToDiv('contact');
								hidemenu();
							}}>
							Contact
						</a>
					</li>
				</ul>
				{/* 	<div className='btns-container'>
					<button>Login</button>
					<button>Sign Up</button>
				</div> */}
			</div>
		</nav>
	);
}

export default Navbar;
