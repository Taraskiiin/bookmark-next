/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function Footer() {
	return (
		<footer className='py-16 bg-veryDarkBlue'>
			<div className='container flex flex-col items-center justify-between mx-auto space-y-16 px-6 md:flex-row md:space-y-0'>
				<div className='flex flex-col items-center justify-between space-y-8 text-lg font-light md:flex-row md:space-y-0 md:space-x-14 text-grayishBlue'>
					<img src='/assets/logo-bookmark-footer.svg' alt='' className='mb-1' />

					<Link href='#features' className='uppercase hover:text-softRed'>
						Features
					</Link>
					<Link href='#download' className='uppercase hover:text-softRed'>
						Download
					</Link>
					<Link href='#faq' className='uppercase hover:text-softRed'>
						FAQ
					</Link>
				</div>
				<div className='flex space-x-10'>
					<Link href='#'>
						<img src='/assets/icon-facebook.svg' alt='' className='h-6 ficon' />
					</Link>
					<Link href='#'>
						<img src='/assets/icon-twitter.svg' alt='' className='h-6 ficon' />
					</Link>
				</div>
			</div>
		</footer>
	);
}
