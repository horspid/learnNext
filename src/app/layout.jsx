import { Inter } from 'next/font/google';
import './globals.css';

import Footer from '@components/Footer.jsx';
import Navigation from '@components/Navigation';

export const metadata = {
	title: 'Next JS tutorial',
	description: 'Dark, modern Next.js demo with Users',
	openGraph: {
		siteName: 'Tutorial',
		description: 'Some text...',
	},
};

const inter = Inter({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	variable: '--font-inter',
});

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={inter.variable}>
			<body>
				<div className="bg-grid"></div>
				<Navigation />
				<main className="container page">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
