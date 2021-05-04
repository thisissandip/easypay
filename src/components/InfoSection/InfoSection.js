import React from 'react';
import InfoLayout from './InfoLayout';
import { infodata } from '../../websitedata';

function InfoSection() {
	const infodatacomp = infodata.map((item) => (
		<InfoLayout
			id={item.id}
			key={item.layoutname}
			layoutname={item.layoutname}
			title={item.title}
			des={item.des}
			bg={item.background}
			displaybuttons={item.button}
			imgname={item.imgname}
			imgclassname={item.imgclassname}
			mycolor={item.color}
			features={item.features}
		/>
	));
	return <>{infodatacomp}</>;
}

export default InfoSection;
