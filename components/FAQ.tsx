import React, { useState } from 'react';

const FAQList = [
	{
		id: '1',
		title: 'What is Bookmark?',
		content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
    repellat amet doloribus consequuntur eos similique provident
    tempora voluptates iure quia fuga dicta voluptatibus culpa
    mollitia recusandae delectus id suscipit labore?`,
	},
	{
		id: '2',
		title: 'How can I request a new browser?',
		content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
        repellat amet doloribus consequuntur eos similique provident
        tempora voluptates iure quia fuga dicta voluptatibus culpa
        mollitia recusandae delectus id suscipit labore?`,
	},
	{
		id: '3',
		title: 'Is ther a mobile app?',
		content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
repellat amet doloribus consequuntur eos similique provident
tempora voluptates iure quia fuga dicta voluptatibus culpa
mollitia recusandae delectus id suscipit labore?`,
	},
	{
		id: '4',
		title: 'What about other Chromium browsers',
		content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
repellat amet doloribus consequuntur eos similique provident
tempora voluptates iure quia fuga dicta voluptatibus culpa
mollitia recusandae delectus id suscipit labore?`,
	},
];

export default function FAQ() {
	const [openById, setOpenById] = useState<string[]>([]);

	const handleClick = (id: string) => {
		if (openById.includes(id)) {
			const filtered = openById.filter((el) => el !== id);
			setOpenById(filtered);
			return;
		}
		const newArray = [...openById, id];
		setOpenById(newArray);
	};

	return (
		<section id='faq-accordion'>
			<div className='mx-auto px-6 mb-32'>
				<div className='max-w-2xl m-8 mx-auto'>
					{FAQList.map((el) => (
						<div key={el.id} className='py-1 border-b outline-none max-h-full'>
							<div
								className='flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer ease'
								onClick={() => handleClick(el.id)}
							>
								<div className='transition duration-500 ease group-hover:text-red-500'>
									{el.title}
								</div>
								<div
									className={`transition duration-500 ease  ${
										openById.includes(el.id) && 'rotate-180 text-red-500'
									}`}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='18'
										height='12'
									>
										<path
											fill='none'
											stroke='currentColor'
											stroke-width='3'
											d='M1 1l8 8 8-8'
										/>
									</svg>
								</div>
							</div>
							<div
								className={`transition duration-500 ease ${
									openById.includes(el.id) ? 'block' : 'hidden'
								}`}
							>
								<p className='py-2 text-justify text-gray-400'>{el.content}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
