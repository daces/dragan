import React from 'react';
import styled from 'styled-components';
import Button from './buttons/button';
import svgImg from '/src/images/light.svg';

import useMedia from '../defaults/useMedia';
import { assets } from '../defaults/assets';
const Header = () => {
	return (
		<Head>
		
				{ useMedia('(min-width: 768px)') ? 
			<Title>
				Want to get <Hi>more visits</Hi>
				<br />
				thanks to <Hi>blazing-fast</Hi>
				<br /> and <Hi>SEO-friendly</Hi>
				<br /> websites?
			</Title>
				: 
				<Title>
					Want to get <Hi>more visits</Hi>?
				</Title> }
			<div style={{"textAlign" : "center"}}>
			<Button link={assets.mailto}>Contact</Button>
			</div>
		</Head>
	);
};
export default Header;
const Head = styled.header`
	margin-bottom: 5.5em;
	grid-column: col-start / span 12;
	// background: url(${svgImg});
	background-position: top;
	background-repeat: no-repeat;
	background-size: 170%;
	@media (min-width: 768px) {
		background-size: cover;
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
const Hi = styled.span`
	color: #3c5ab9;
`;

// const Head = styled.header``;
