import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './css/style.css';

import Header from './utils/Header';
import Footer from './utils/Footer';

import Hero from './sections/Hero';
import Intro from './sections/Intro';
import Projects from './sections/Projects';

export default function App() {
	return (
		<div >
			<Header />

			<div>
				<Hero />
				<Intro />
				<Projects />
			</div>

			<Footer />
		</div>
	);
}