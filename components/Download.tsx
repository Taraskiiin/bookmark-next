import React from 'react';

export default function Download() {
	return (
		<section id='download'>
			<div className='container mx-auto px-6'>
				<h2 className='mb-6 text-3xl font-semibold text-center md:text-4xl'>
					Download the extension
				</h2>
				<p className='max-w-lg mx-auto text-center text-grayishBlue'>
					{`
					We've got more browsers in the pipeline. Please do let us know if
					you've got a favourite you'd like us to prioritize.`}
				</p>
			</div>
		</section>
	);
}
