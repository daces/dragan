import React from 'react';
import styled from 'styled-components';
import Particles from 'react-tsparticles';

import svgImg from '/src/images/light.svg';

const PortfolioHeader = () => {
	return (
		<Head>
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
			<Title>
                Portfolio
			</Title>
		</Head>
	);
};
export default PortfolioHeader;
const Head = styled.header`
    padding-bottom: 6.5em;
	grid-column: col-start / span 12;
	background: url(${svgImg});
	background-position: top;
	background-repeat: no-repeat;
	background-size: 170%;
	@media (min-width: 768px) {
		background-size: cover;
	}
	@media (min-width: 1440px) {
		background-size: 170%;
	}
`;
const Title = styled.h1`
	color: #fff;
	padding-top: 85px;
	font-size: 3.5em;
	@media screen and (min-width: 1500px) {
		font-size: 5vw;
	}
	line-height: 1.2;
	text-align: center;
	font-weight: 700;
`;