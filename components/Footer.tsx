/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const footerLinks = [
	{
		id: '1',
		link: '#features',
		name: 'Features',
	},
	{
		id: '2',
		link: '#download',
		name: 'Download',
	},
	{
		id: '3',
		link: '#faq',
		name: 'FAQ',
	},
];

const socialMedia = [
	{
		id: '1',
		link: '#',
		img: '/assets/icon-facebook.svg',
	},
	{
		id: '2',
		link: '#',
		img: '/assets/icon-twitter.svg',
	},
];

export default function Footer() {
	return (
		<footer className='py-16 bg-veryDarkBlue'>
			<div className='container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0'>
				<div className='flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue'>
					<img src='/assets/logo-bookmark-footer.svg' alt='' className='mb-1' />
					{footerLinks.map((el) => (
						<Link
							key={el.id}
							href={el.link}
							className='uppercase hover:text-softRed'
						>
							{el.name}
						</Link>
					))}
				</div>
				<div className='flex space-x-10'>
					{socialMedia.map((el) => (
						<Link key={el.id} href={el.link}>
							<img src={el.img} alt='' className='h-6 ficon' />
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
}
