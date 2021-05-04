import React, { useState } from 'react';
import FAQ from './Faq';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { faqdata } from '../../websitedata';

function FaqSection() {
	const [Faqcontent, setFaqcontent] = useState(faqdata.allfaqs);

	const toggleFAQ = (theindex) => {
		setFaqcontent(
			Faqcontent.map((item, i) => {
				if (i === theindex) {
					item.open = !item.open;
				} else {
					item.open = false;
				}
				return item;
			})
		);
	};

	return (
		<section id={`${faqdata.id}`} className='faq-section'>
			<div className='faq-section-title'>{faqdata.faqTitle}</div>
			<div className='faq-section-des'>{faqdata.faqdes}</div>
			<div className='faq-cont'>
				{Faqcontent.map((item, i) => (
					<FAQ
						key={i}
						myindex={i}
						question={item.ques}
						ans={item.ans}
						open={item.open}
						toggleFAQ={toggleFAQ}
					/>
				))}
			</div>
			<div className='faq-foot'>{faqdata.faqmore}</div>
		</section>
	);
}

export default FaqSection;
