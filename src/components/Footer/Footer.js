import React from 'react';
import {
	FaFacebookSquare,
	FaTwitterSquare,
	FaInstagramSquare,
	FaSnapchatSquare,
} from 'react-icons/fa';
import './footer.scss';

function Footer() {
	return (
		<>
			<footer>
				<div className='footer-cont'>
					<div className='foot-col-1'>
						<div className='company-logo'>EasyPay</div>
						<div className='company-des'>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
							suscipit accusamus libero! Nemo, aliquam eligendi.
						</div>
						<div className='company-socials'>
							<FaFacebookSquare className='company-soc' />
							<FaTwitterSquare className='company-soc' />
							<FaInstagramSquare className='company-soc' />
							<FaSnapchatSquare className='company-soc' />
						</div>
					</div>
					<ul className='foot-col-2'>
						<li className='title-col-2'>Links</li>
						<li>
							<a href='#'>Home</a>
						</li>
						<li>
							<a href='#'>About Us</a>
						</li>
						<li>
							<a href='#'>Pricing</a>
						</li>
						<li>
							<a href='#'>Services</a>
						</li>
						<li>
							<a href='#'>Reviews</a>
						</li>
					</ul>

					<ul className='foot-col-3'>
						<li className='title-col-3'>Product Help</li>
						<li>
							<a href='#'>FAQ</a>
						</li>
						<li>
							<a href='#'>Services</a>
						</li>
						<li>
							<a href='#'>Contact</a>
						</li>
						<li>
							<a href='#'>Reviews</a>
						</li>
						<li>
							<a href='#'>Pricing</a>
						</li>
					</ul>

					<div className='foot-col-4'>
						<div className='sub-title'>Subscribe to Us</div>
						<input type='email' />
						<button>Subscribe</button>
					</div>
				</div>
			</footer>
			<div className='github-link'>
				Made with ❤️️ by
				<a href='https://github.com/thisissandip' target='_blank'>
					Sandip Mondal
				</a>
			</div>
		</>
	);
}

export default Footer;
