import React from "react";
import styled from "styled-components";
import loadable from '@loadable/component'
// import Particles from 'react-particles-js';

// import Particles from 'react-tsparticles';
import Layout from "../components/layouts/layout";

//import Button from "../components/buttons/button";
import Navigation from "../components/nav/navigation";
import Header from "../components/header";
import WhatGatsby from "../components/what-gatsby";
import Process from "../components/process";
import Tech from "../components/tech";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";

const LoadParticles = loadable(() => import('react-tsparticles'))
// const LoadWhatGatsby = loadable(() => import('../components/what-gatsby'))
// const LoadProcess = loadable(() => import('../components/process'))
// const LoadTech = loadable(() => import('../components/tech'))
// const LoadPortfolio  = loadable(() => import('../components/portfolio'))
// const LoadContact = loadable(() => import('../components/contact'))
const Index = () => {
	return (
		<>
		<Grid>
			<Layout title="Freelance Gatsby web developer in London" />

			<Navigation />
			<Header />
			<WhatGatsby />
			<Process/>
			<Tech />
			<Portfolio/>
			{/* <LoadWhatGatsby /> */}
			{/* <LoadProcess />
			<LoadTech />
			<LoadPortfolio /> */}
		
		<LoadParticles
				id="tsparticles"
				options={{
					background: {
						color: {
							value: '#020433',
						},
					},
					fullScreen: {
						enable: true,
						zIndex: '-1',
					},
					interactivity: {
						events: {
							onClick: {
								enable: true,
								mode: 'repulse',
							},
							onHover: {
								enable: true,
								mode: 'bubble',
							},
						},
						modes: {
							bubble: {
								distance: 250,
								duration: 2,
								opacity: 0,
								size: 0,
							},
							grab: {
								distance: 400,
							},
							repulse: {
								distance: 400,
							},
						},
					},
					particles: {
						color: {
							value: '#ffffff',
							opacity: 0.1,
						},
						links: {
							color: {
								value: '#ffffff',
							},
							distance: 150,
							opacity: 0.1,
						},
						move: {
							attract: {
								rotate: {
									x: 600,
									y: 600,
								},
							},
							enable: true,
							outModes: {
								bottom: 'out',
								left: 'out',
								right: 'out',
								top: 'out',
							},
							random: true,
							speed: 1,
						},
						number: {
							density: {
								enable: true,
							},
							value: 160,
						},
						opacity: {
							random: {
								enable: true,
							},
							value: {
								min: 0,
								max: 0.3,
							},
							animation: {
								enable: true,
								speed: 1,
							},
						},
						size: {
							random: {
								enable: true,
							},
							value: {
								min: 1,
								max: 3,
							},
							animation: {
								speed: 4,
								minimumValue: 0.3,
							},
						},
					},
				}}
			/> 
		</Grid>
		{/* <LoadContact /> */}
		<Contact/>
		</>
	);
};

export default Index;
const gapPixel = 20; // in pixels
const columns = 12; //
let gap = (gapPixel * columns) / 1000 * 100 / columns; // gap in percentage;
let column = ((1000 - gapPixel * columns) / columns / 10).toFixed(1);
console.log(column);
const Grid = styled.div`
	padding: 0 24px;
	@media (min-width: 768px) {
		display: grid;
		column-gap: ${gap}%;
		row-gap: 60px;
		grid-template-columns: repeat(${columns}, [col-start] ${column}%);
	}
	@media (min-width:1440px) {
		margin: 0 200px;
		display: grid;
		column-gap: ${gap}%;
		row-gap: 60px;
		grid-template-columns: repeat(${columns}, [col-start] ${column}%);
	}
	& > * {
		//grid-column: col-start / span 12;
	}
`;
