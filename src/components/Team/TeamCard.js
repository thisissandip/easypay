import React from "react";
import "./themes.scss";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

function TeamCard() {
	return (
		<div className='team-card'>
			<div className='team-card-overlay'>
				<div className='member-name'>Sandip Mondal</div>
				<div className='member-pos'>Hello</div>
				<div className='member-links'>
					<FaFacebookF className='social-link' />
					<FaTwitter className='social-link' />
					<FaInstagram className='social-link' />
					<FaGithub className='social-link' />
				</div>
			</div>
			<img
				className='member-pic'
				src={"../../imgs/profile1.jpg"}
				alt='Name of the Member'
			/>
		</div>
	);
}

export default TeamCard;
