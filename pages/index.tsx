import Head from 'next/head';
import { Rubik } from 'next/font/google';

import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Tabs from '@/components/Tabs';
import Download from '@/components/Download';
import DownloadBoxes from '@/components/DownloadBoxes';
import FAQHeader from '@/components/FAQHeader';
import FAQ from '@/components/FAQ';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

const rubik = Rubik({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
});

export default function Home() {
	return (
		<>
			<Head>
				<title>Bookmark</title>
			</Head>
			<main className={rubik.className}>
				<Hero />
				<Features />
				<Tabs />
				<Download />
				<DownloadBoxes />
				<FAQHeader />
				<FAQ />
				<Newsletter />
				<Footer />
			</main>
		</>
	);
}
