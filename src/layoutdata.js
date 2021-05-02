export const layoutdata = [
	{
		layoutname: 'notcashback',
		title: 'Make Your Device Manage Everything',
		des: [
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolor ut iusto vitae autem neque eum ipsam, impedit asperiores vel cumque laborum dicta repellendus inventore voluptatibus et explicabo nobis unde.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique dolor ut iusto vitae autem neque eum ipsam, impedit asperiores vel cumque laborum dicta r.',
		],
		features: false,
		background: 'white',
		/* background: ' #f9f5ff', */
		color: 'black',
		button: ['Learn More', "Let's do this"],
		imgname: 'diffcards.png',
		imgclassname: 'diffcardsimg',
	},
	{
		layoutname: 'cashback',
		title: 'A fully integrated suite of payments products',
		/* 	background: '#fafafa', */
		background: 'white',
		color: 'black',
		features: true,
		des: [
			'Fully layered dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.',
			'Customizable design dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.',
			'Marketing chart dolor sit amet, consectetur adipisicing elit. Facere, nobis, id expedita dolores officiis laboriosam.',
		],
		button: null,
		button: ['Learn More'],
		imgname: 'cashback.png',
		imgclassname: 'cashbackimg',
	},
];

export const plansdata = [
	{
		plantype: 'Basic',
		price: 9,
		recommend: false,
		features: [
			{
				name: '5GB Linux Web Space',
				included: true,
			},
			{
				name: '5 MySQL Databases',
				included: true,
			},
			{
				name: '24/7 Tech Support',
				included: false,
			},
			{
				name: 'Daily Backups',
				included: false,
			},
		],
	},
	{
		plantype: 'Premium',
		price: 29,
		recommend: true,
		features: [
			{
				name: '10GB Linux Web Space',
				included: true,
			},
			{
				name: '10 MySQL Databases',
				included: true,
			},
			{
				name: '24/7 Tech Support',
				included: true,
			},
			{
				name: 'Daily Backups',
				included: false,
			},
		],
	},
	{
		plantype: 'Business',
		price: 49,
		recommend: false,
		features: [
			{
				name: '15GB Linux Web Space',
				included: true,
			},
			{
				name: '15 MySQL Databases',
				included: true,
			},
			{
				name: '24/7 Tech Support',
				included: true,
			},
			{
				name: 'Daily Backups',
				included: true,
			},
		],
	},
];

export const servicesdata1 = [
	{
		name: 'All Cards Accepted',
		img: 'debit-card.png',
	},
	{
		name: 'Cryptocurrency',
		img: 'pay.png',
	},
	{
		name: 'Online Payments',
		img: 'comp.png',
	},
	{
		name: 'Billing',
		img: 'bill.png',
	},
	{
		name: 'Pay From Anywhere',
		img: 'op.png',
	},
	{
		name: 'Payment Gateway',
		img: 'credit-card.png',
	},
];

export const reviewsdata = [
	{
		stars: 4,
		highlight: 'Excellent, Amazing!',
		review:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi suscipit quas est soluta explicabo asperiores non, quidem perferendis fuga ipsum!',
		picture: 'profile1.jpg',
		name: 'Sneha Kulkarni',
		pos: 'CEO, Augeland',
	},
	{
		stars: 5,
		highlight: 'Nice work!',
		review:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi suscipit quas est soluta explicabo asperiores non, quidem perferendis fuga ipsum!',
		picture: 'profile2.jpg',
		name: 'Shrey Gaikwad',
		pos: 'Programmer',
	},
	{
		stars: 4,
		highlight: 'Great support!!',
		review:
			'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi suscipit quas est soluta explicabo asperiores non, quidem perferendis fuga ipsum!',
		picture: 'profile3.jpg',
		name: 'Avi Sahay',
		pos: 'Python Enthu',
	},
];

export const teamdata = [
	{
		name: 'Olive Yew',
		pos: 'CEO',
		pic: 'profile1.jpg',
	},
	{
		name: 'Maureen Biologist',
		pos: 'Biologist',
		pic: 'profile2.jpg',
	},
	{
		name: 'Allie Grater',
		pos: 'Senior Engineer',
		pic: 'profile3.jpg',
	},
	{
		name: 'Peg Legge',
		pos: 'Developer',
		pic: 'profile4.jpg',
	},
];

export const faqdata = [
	{
		ques: 'WHY MUST I MAKE PAYMENT IMMEDIATELY AT CHECKOUT?',
		ans:
			'Sample ordering is on ‘first-come-first-served’ basis. To ensure that you get your desired samples, it is recommended that you make your payment within 60 minutes of checking out.Sample ordering is on ‘first-come-first-served’ basis. To ensure that you get your desired samples, it is recommended that you make your payment within 60 minutes of checking out.',
		open: false,
	},
	{
		ques: 'HOW MANY FREE SAMPLES CAN I REDEEM?',
		ans:
			"Due to the limited quantity, each member's account is only entitled to 1 unique free sample. You can check out up to 4 free samples in each checkout.",
		open: false,
	},
	{
		ques: 'WHY IS THERE A CHECKOUT LIMIT?',
		ans:
			'Sample Store is a popular spot and gets lots of shoppers at a time. These limits are in place to make sure everyone has a good time trying and purchasing their products.Sample Store is a popular spot and gets lots of shoppers at a time. These limits are in place to make sure everyone has a good time trying and purchasing their products. ',
		open: false,
	},
	{
		ques: 'HOW DO I CANCEL MY ORDERS BEFORE I MAKE A PAYMENT?',
		ans:
			'After logging into your account, go to your Shopping Cart. Here, you will be able to make payment or cancel your order. Note: We cannot give refunds once payment is verified. ',
		open: false,
	},
];
