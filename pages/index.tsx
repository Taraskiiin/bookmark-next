import Head from 'next/head';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export default function Home() {
	return (
		<>
			<Head>
				<title>Bookmark</title>
				<main className={rubik.className}></main>
			</Head>
		</>
	);
}
