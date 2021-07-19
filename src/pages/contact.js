import React from "react";
import styled from "styled-components";
// import Particles from 'react-particles-js';

import Particles from 'react-tsparticles';
import Layout from "../components/layouts/layout";
import Navigation from "../components/nav/navigation";

import ContactForm from "../components/contactForm";
const MyStory = () => {
	return (
		<>
		<Grid>
			<Layout title="Freelance Gatsby web developer in London - Contact" />

			<Navigation />
        <ContactForm />
		</Grid>
			 <Particles
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
		</>
	);
};

export default MyStory;
const gapPixel = 20; // in pixels
const columns = 12; //
let gap = (gapPixel * columns) / 1000 * 100 / columns; // gap in percentage;
let column = ((1000 - gapPixel * columns) / columns / 10).toFixed(1);
console.log(column);
const Grid = styled.div`
	padding: 0;
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
