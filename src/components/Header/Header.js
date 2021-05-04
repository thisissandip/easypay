import React from 'react';
import Navbar from '../Navbar/Navbar';
import './header.scss';
import { headerdata } from '../../websitedata';

function Header() {
	const styles = {
		backgroundColor: headerdata.headerbackgroundcolor,
	};

	return (
		<>
			<header id={`${headerdata.id}`} style={styles}>
				<Navbar />
				<div className='header-container'>
					<div className='header-left-container'>
						<div className='left-title'>{headerdata.title}</div>
						<div className='left-des'>{headerdata.description}</div>
						<div className='left-btns-cont'>
							<button className='startnow-btn'>
								{headerdata.button1name}{' '}
							</button>
							<button className='learnmore-btn'>
								{headerdata.button2name}
							</button>
						</div>
					</div>
					<div className='header-right-container'>
						<img
							src={
								process.env.PUBLIC_URL + `/imgs/${headerdata.headerrightImg}`
							}
							className='header-phone'
						/>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;
