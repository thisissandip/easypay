import React from "react";
import MyForm from "./MyForm";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import "./contact.scss";

function Contact() {
	return (
		<div className='contact-cont'>
			<div className='contact-left-cont'>
				<div className='left-addr left-deets'>
					<div className='contact-icon'>
						<FaHome />
					</div>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique,
					quaerat possimus ducimus.
				</div>
				<div className='left-email left-deets'>
					<div className='contact-icon'>
						<GrMail />
					</div>
					hello@gmail.com
				</div>
				<div className='left-phone left-deets'>
					<div className='contact-icon'>
						<FaPhoneAlt />
					</div>
					637821576512785
				</div>
			</div>
			<div className='contact-right-cont'>
				<MyForm />
			</div>
		</div>
	);
}

export default Contact;
