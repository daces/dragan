import React from 'react';
import styled from 'styled-components';
import Particles from 'react-tsparticles';
import Button from './buttons/button';

import svgImg from '/src/images/light.svg';
import overlayImg from '/src/images/overlay.svg';

import meImg from '/src/images/me.jpg';
import useMedia from '../defaults/useMedia';
const MyStoryHeader = () => {
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
				{ useMedia('(min-width: 768px)') ? 
                <>
			<Title>
                <Hi>Hi there!</Hi>
				I`m<br/> Dragan Manchikj
			</Title>
            </>
				:
				<Title>
					<Hi>Hi there!</Hi>
					I`m<br/> Dragan Manchikj
				</Title> }
			<div style={{"textAlign" : "center"}}>
			<Button link="mailto:dace.air@gmail.com">Contact</Button>

            <Content>
                <div>
                <img src={meImg} alt="Dragan Manchikj" />
                </div>
                <p>Coming from small yet such a friendly country as Macedonia filled with lots of activities, great social life and many places to spend really good time, the food is diverse and delicious.
<br/><br/>
Worked at many jobs only to find my-self willing to express my creativity trough programing.
</p>
            </Content>
			</div>
		</Head>
	);
};
export default MyStoryHeader;
const Head = styled.header`
	margin-bottom: 5.5em;
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
const Hi = styled.p`
font-size: 0.4em;
	color: #fff;
`;
const Content = styled.div`
text-align:left;
margin-top: 100px;

@media (min-width: 768px) {
div{
    float: left;
    width:30%;
    position: relative;
}
div::after {
    content: '';
    position: absolute;
    top: -70px;
    bottom: -100px;
    left: -20px;
    right: -20px;
    z-index: -1;
    background: url(${overlayImg});
    background-position: top;
    background-repeat: repeat;
    background-size: contain;
}
p{
    float: right;
    width:65%;
}
}
`