/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

const downloadBoxesList = [
	{
		id: '1',
		title: 'Add to Chrome',
		requirements: 'Minimum Version 62',
		img: '/assets/logo-chrome.svg',
		link: '#',
	},
	{
		id: '2',
		title: 'Add to Firefox',
		requirements: 'Minimum Version 55',
		img: '/assets/logo-firefox.svg',
		link: '#',
	},
	{
		id: '3',
		title: 'Add to Opera',
		requirements: 'Minimum Version 46',
		img: '/assets/logo-opera.svg',
		link: '#',
	},
];

export default function DownloadBoxes() {
	return (
		<section id='download-boxes' className='py-32'>
			<div className='flex flex-col items-start max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row'>
				{downloadBoxesList.map((el, i) => (
					<div
						key={el.id}
						className={`flex flex-col w-full py-6 space-y-4 text-center bg-white rounded-lg shadow-lg md:w-1/3`}
						// TODO: fix inline styles
						style={{ marginTop: `${2 * i + 'rem'}` }}
					>
						<div className='flex justify-center'>
							<img src={el.img} alt={el.title} />
						</div>
						<h5 className='pt-6 text-xl font-bold'>{el.title}</h5>
						<p className='text-gray-400'>{el.requirements}</p>
						<div className='bg-dots bg-repeat-x px-6 pt-6 capitalize'>
							<Link
								href={el.link}
								className='block w-full py-3 text-white duration-200 border-2 rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue'
							>
								Add & Install Extension
							</Link>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
