import React from "react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import "./faq.scss";

function Faq({ question, ans, open, myindex, toggleFAQ }) {
	return (
		<>
			<div
				key={myindex}
				className={open ? "faq-card open" : "faq-card"}
				onClick={() => toggleFAQ(myindex)}>
				<div className='faq-card-link'>
					<div className='faq-title'>{question}</div>
					<div className='arrow'>
						{open ? <AiOutlineArrowUp /> : <AiOutlineArrowDown />}
					</div>
				</div>
				<div className={open ? "faq-ans open-ans" : "faq-ans"}>{ans}</div>
			</div>
		</>
	);
}

export default Faq;
