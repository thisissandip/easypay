import React from 'react';
import './infosection.scss';

function HeaderLayout({
	layoutname,
	title,
	bg,
	mycolor,
	des,
	displaybuttons,
	imgname,
	imgclassname,
	features,
	id,
}) {
	return (
		<section
			id={id}
			style={{
				background: bg,
				color: mycolor,
			}}
			className='layout-section'>
			<div className={`layout-container ${layoutname}`}>
				<div style={{ color: mycolor }} className='layout-left-container'>
					<div className={`layout-title ${layoutname}-title`}>{title}</div>
					<div className='layout-des'>
						{des.map((item) => (
							<div key={item} className='single-description'>
								{' '}
								{features && <div>&gt;</div>} {item}
							</div>
						))}
					</div>

					{displaybuttons !== null && (
						<div className='layout-btns-cont'>
							{displaybuttons.map((item) => (
								<button
									key={item}
									className={`startnow-btn ${layoutname}-btns `}>
									{item}
								</button>
							))}
						</div>
					)}
				</div>

				<div className='layout-right-container'>
					<img
						alt='phone + cashback'
						src={process.env.PUBLIC_URL + `/imgs/${imgname}`}
						className={`header-phone ${imgclassname}`}
					/>
				</div>
			</div>
		</section>
	);
}

export default HeaderLayout;
