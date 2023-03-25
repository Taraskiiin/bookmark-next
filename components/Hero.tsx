import React, { useState } from 'react';
import Link from 'next/link';

const linksList = [
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

export default function Hero() {
	const [openModal, setOpenModal] = useState<boolean>(false);

	const handleToggle = () =>
		openModal ? setOpenModal(false) : setOpenModal(true);

	return (
		<>
			<nav className='container relative mx-auto p-6'>
				<div className='flex items-center justify-between space-x-20 my-6'>
					<div className='z-2'>
						<img src='/assets/logo-bookmark.svg' alt='' id='logo' />
					</div>
					<div className='hidden items-center space-x-10 uppercase text-grayishBlue md:flex'>
						{linksList.map((el) => (
							<Link
								key={el.id}
								href={el.link}
								className='tracking-widest hover:text-softRed'
							>
								{el.name}
							</Link>
						))}
						<Link
							href='#'
							className='px-8 py-2 text-white bg-softRed border-2 border-softRed rounded-lg shadow-md hover:text-softRed hover:bg-white'
						>
							Login
						</Link>
					</div>
					<button
						className={`z-50 block md:hidden focus:outline-none hamburger bg-red ${
							openModal && 'open'
						}`}
						type='button'
						onClick={handleToggle}
					>
						<span className='hamburger-top'></span>
						<span className='hamburger-middle'></span>
						<span className='hamburger-bottom'></span>
					</button>
				</div>
				<div
					id='menu'
					className={`fixed inset-0 z-20 flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue ${
						openModal ? 'block' : 'hidden'
					}`}
				>
					{linksList.map((el) => (
						<div key={el.id} className='w-full py-3 text-center'>
							<Link href={el.link} className='block hover:text-softRed'>
								{el.name}
							</Link>
						</div>
					))}
					<div className='w-full py-3 text-center'>
						<Link href='#' className='block hover:text-softRed'>
							Login
						</Link>
					</div>
				</div>
			</nav>
			<section id='hero' className='overflow-hidden'>
				<div className='container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0'>
					<div className='flex flex-col space-y-10 lg:mt-16 lg:w-1/2'>
						<h1 className='text-3xl font-semibold text-center lg:text-6xl lg:text-left'>
							A Simple Bookmark Manager
						</h1>
						<p className='max-w-md mx-auto text-lg text-center text-gray-400 lg:text-2xl lg:text-left lg:mt-0 lg:mx-0'>
							A clean and simple interface to organize your favourite websites.
							Open a new browser tab and see your sites load instantly. Try it
							for free.
						</p>
						<div className='flex items-center justify-center w-full space-x-4 lg:justify-start'>
							<Link
								href='#'
								className='p-4 text-sm font-semibold text-white bg-softBlue rounded shadow-md border-2 border-softBlue md:text-base hover:bg-white hover:text-softBlue'
							>
								Get It On Chrome
							</Link>
							<Link
								href='#'
								className='p-4 text-sm font-semibold text-black bg-gray-300 rounded shadow-md border-2 border-gray-300 md:text-base hover:bg-white hover:text-gray-600'
							>
								Get It On Firefox
							</Link>
						</div>
					</div>
					<div className='relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2'>
						<div className='bg-hero' />
						<img
							src='/assets/illustration-hero.svg'
							alt=''
							className='relative z-10 lg:top-24 xl:top-0 overflow-x-visible'
						/>
					</div>
				</div>
			</section>
		</>
	);
}
