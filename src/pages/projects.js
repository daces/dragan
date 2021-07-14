import React from "react";
import styled from "styled-components";
import loadable from '@loadable/component'
// import Particles from 'react-particles-js';

import Layout from "../components/layouts/layout";

import Navigation from "../components/nav/navigation";
// import Header from "../components/header";
//import WhatGatsby from "../components/what-gatsby";
// import Process from "../components/process";
//import Button from "../components/buttons/button";
// import Tech from "../components/tech";
// import Portfolio from "../components/portfolio";
// import Contact from "../components/contact";

import PortfolioHeader from "../components/portfolioHeader";
const LoadProjects = loadable(() => import("../components/portfolio"))

const LoadContact = loadable(() => import('../components/contact'))
const MyStory = () => {
	return (
		<>
		<Grid>
			<Layout title="Freelance Gatsby web developer in London - Projects" />

			<Navigation />
		<PortfolioHeader />
		<LoadProjects />
		</Grid>
		<LoadContact />
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
