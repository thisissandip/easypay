import React from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import "./navbar.scss";

function Navbar() {
	const showmenu = () => {
		const sidebar = document.querySelector(".nav-links");
		sidebar.style.display = "initial";
	};

	const hidemenu = () => {
		const sidebar = document.querySelector(".nav-links");
		sidebar.style.display = "none";
	};

	return (
		<nav>
			<div className='nav-cont'>
				<div className='logo'>THEAPP</div>
				<FiMenu onClick={showmenu} className='ham-btn' />
				<ul className='nav-links'>
					<GrClose onClick={hidemenu} className='menu-close-btn' />

					<li className='nav-item'>
						<a href='#'>Services</a>
					</li>
					<li className='nav-item'>
						<a href='#plans'>Pricing</a>
					</li>
					<li className='nav-item'>
						<a href='#'>Team</a>
					</li>
					<li className='nav-item'>
						<a href='#'>Reviews</a>
					</li>
					<li className='nav-item'>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
