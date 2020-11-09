import React from "react";
import "./header.scss";

function Header() {
	return (
		<>
			<header>
				<svg
					className='wave'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1440 320'>
					<path
						fill='#ffffff'
						fill-opacity='1'
						d='M0,192L40,181.3C80,171,160,149,240,149.3C320,149,400,171,480,202.7C560,235,640,277,720,266.7C800,256,880,192,960,170.7C1040,149,1120,171,1200,186.7C1280,203,1360,213,1400,218.7L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'></path>
				</svg>

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

					<img src={"/imgs/Card copy.png"} className='header-phone' />
				</div>
			</header>
		</>
	);
}

export default Header;
