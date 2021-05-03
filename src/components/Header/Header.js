import React from 'react';
import Navbar from '../Navbar/Navbar';
import './header.scss';

function Header() {
	return (
		<>
			<header id='header'>
				<Navbar />
				<div className='header-container'>
					<div className='header-left-container'>
						<div className='left-title'>
							Payment Made Easy, <br /> Secure And Convenient
						</div>
						<div className='left-des'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta,
							minima eligendi! Repellendus ex corrupti blanditiis, quam id
							doloremque explicabo perspiciatis tempora quasi veritatis vitae
							eligendi voluptas, inventore delectus reprehenderit illum.
						</div>
						<div className='left-btns-cont'>
							<button className='startnow-btn'>Start now &gt; </button>
							<button className='learnmore-btn'>Learn more &gt;</button>
						</div>
					</div>

					<div className='header-right-container'>
						<img
							src={'/imgs/headerphone.png'}
							className='header-phone'
							loading='lazy'
						/>
					</div>
				</div>
				<div className='slash'></div>
			</header>
		</>
	);
}

export default Header;
