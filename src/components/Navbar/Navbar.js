import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import "./navbar.scss";

function Navbar() {
	const [navbarbg, setnavbarbg] = useState(null);

	const showmenu = () => {
		const sidebar = document.querySelector(".nav-links");
		sidebar.style.right = "0%";
	};

	const hidemenu = () => {
		const sidebar = document.querySelector(".nav-links");
		sidebar.style.right = "-100%";
		/* sidebar.style.display = "none"; */
	};

	window.onscroll = () => {
		document.scrollingElement.scrollTop > 100
			? setnavbarbg(true)
			: setnavbarbg(false);
	};

	return (
		<nav className={navbarbg && `nav-bg`}>
			<div className={navbarbg ? `nav-cont scrolled` : `nav-cont`}>
				<div className='logo'>
					<a href='#header'>THEAPP</a>{" "}
				</div>
				<FiMenu onClick={showmenu} className='ham-btn' />
				<ul className='nav-links'>
					<GrClose onClick={hidemenu} className='menu-close-btn' />

					<li className='nav-item'>
						<a onClick={hidemenu} href='#services'>
							Services
						</a>
					</li>
					<li className='nav-item'>
						<a href='#plans' onClick={hidemenu}>
							Pricing
						</a>
					</li>
					<li className='nav-item'>
						<a href='#team' onClick={hidemenu}>
							Team
						</a>
					</li>
					<li className='nav-item'>
						<a href='#reviews' onClick={hidemenu}>
							Reviews
						</a>
					</li>
					<li className='nav-item'>
						<a href='#contact' onClick={hidemenu}>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
