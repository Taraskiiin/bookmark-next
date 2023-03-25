/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import Link from 'next/link';

const tabsContentList = [
	{
		id: '1',
		img: '/assets/illustration-features-tab-1.svg',
		title: 'Bookmark in one click',
		desc: `Organize your bookmarks however you like. Our simple
        drag-and-drop interface gives you complete control over how you
        manage your favourite sites.`,
		link: '#',
	},
	{
		id: '2',
		img: '/assets/illustration-features-tab-2.svg',
		title: 'Intelligent search',
		desc: `Our powerful search feature will help you find saved sites in no
        time at all. No need to trawl through all of your bookmarks.`,
		link: '#',
	},
	{
		id: '3',
		img: '/assets/illustration-features-tab-3.svg',
		title: 'Share your bookmarks',
		desc: `Easily share your bookmarks and collections with others. Create
        a shareable a link that you can send at the click of a button.`,
		link: '#',
	},
];

const tabsHeaderList = [
	{
		id: '1',
		title: 'Simple Bookmarking',
	},
	{
		id: '2',
		title: 'Speedy Searching',
	},
	{
		id: '3',
		title: 'Easy Sharing',
	},
];
export default function Tabs() {
	const [activeTab, setActiveTab] = useState<string>('2');

	return (
		<section id='tabs'>
			<div className='container relative mx-auto my-6 mb-32 mt-12 px-6'>
				<div className='bg-tabs' />
				<div className='flex flex-col justify-center max-w-xl mx-auto mb-6 border-b md:space-x-10 md:flex-row'>
					{tabsHeaderList.map((el) => (
						<div
							onClick={() => setActiveTab(el.id)}
							key={el.id}
							className='flex justify-center text-center cursor-pointer text-gray-600 border-b md:border-b-0 hover:text-softRed md:w-1/3 tab'
						>
							<div
								className={`${
									el.id === activeTab
										? 'py-5 border-b-4 border-softRed'
										: 'py-5'
								}`}
							>
								{el.title}
							</div>
						</div>
					))}
				</div>
				<div id='panels' className='container mx-auto h-max'>
					{tabsContentList.map((el) => (
						<div
							key={el.id}
							className={`flex-col py-5 md:flex-row md:space-x-7 panel panel-1 ${
								el.id === activeTab ? 'flex' : 'hidden'
							}`}
						>
							<div className='flex justify-center md:w-1/2'>
								<img src={el.img} alt='' className='relative z-10' />
							</div>
							<div className='flex flex-col space-y-8 md:w-1/2'>
								<h3 className='mt-32 text-3xl font-semibold text-center md:mt-0 md:text-left'>
									{el.title}
								</h3>
								<p className='max-w-md text-center text-grayishBlue md:text-left'>
									{el.desc}
								</p>
								<div className='mx-auto md:mx-0'>
									<Link
										href={el.link}
										className='px-6 py-3 mt-4 font-semibold text-white border-2 border-white rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue hover:border-softBlue hover:border-2'
									>
										More Info
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
