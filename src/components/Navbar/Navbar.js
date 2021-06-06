import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { GrClose } from 'react-icons/gr';
import './navbar.scss';

function Navbar() {
	const [navbarbg, setnavbarbg] = useState(null);

	const showmenu = () => {
		const sidebar = document.querySelector('.nav-links');
		sidebar.style.right = '0%';
	};

	const hidemenu = () => {
		const sidebar = document.querySelector('.nav-links');
		sidebar.style.right = '-100%';
	};

	window.onscroll = () => {
		document.scrollingElement.scrollTop > 40
			? setnavbarbg(true)
			: setnavbarbg(false);
	};

	useEffect(() => {
		// Scroll to the div with navbar height
		let allnavItems = document.querySelectorAll('.nav-link');
		allnavItems.forEach((item) => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				const aTag = item.getAttribute('href');
				const id = aTag.slice(1);

				let top = document.querySelector(`#${id}`).offsetTop;
				let mytop = top - 70;
				window.scrollTo(0, mytop);
			});
		});
	}, []);

	return (
		<nav className={navbarbg ? `nav-bg` : ''}>
			<div className={navbarbg ? `nav-cont scrolled` : `nav-cont`}>
				<div className='logo'>
					<a
						href='#'
						onClick={() => {
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
							className='nav-link'
							href='#services-section' // id of the section to scroll to (The id of this section in website-data.js)
							onClick={() => {
								hidemenu();
							}}>
							Services
						</a>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link'
							href='#plans-section' // id of the section to scroll to (The id of this section in website-data.js)
							onClick={() => {
								hidemenu();
							}}>
							Pricing
						</a>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link'
							href='#team-section' // id of the section to scroll to (The id of this section in website-data.js)
							onClick={() => {
								hidemenu();
							}}>
							Team
						</a>
					</li>
					<li className='nav-item'>
						<a
							href='#reviews-section' // id of the section to scroll to (The id of this section in website-data.js)
							className='nav-link'
							onClick={() => {
								hidemenu();
							}}>
							Reviews
						</a>
					</li>
					<li className='nav-item'>
						<a className='nav-btn'>Try For Free</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
