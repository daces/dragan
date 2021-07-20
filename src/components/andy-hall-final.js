import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { media } from "../defaults/media";

import bgImg from "../images/Brussels.jpg";
const AndyHallFinal = () => {
	return (
		<>
			<Section>
				<ContentWrap>
					<ContentText>
						<ContentFinal>
							<h6>Phase 3</h6>
							<h2>Bringing It All Together</h2>
							<p>
								The new site has a much stronger appeal to the end client. It clearly
								communicates the conversion-driving content about work and talent, while
								still evoking a social vibe. A visitor to the site can instantly tell
								what the product is and how it would benefit their business.
							</p>
						</ContentFinal>
					</ContentText>
				</ContentWrap>

				<RowImage>
					<div>
						<StaticImage src="../images/mockup.png" alt="mockup" />
					</div>
				</RowImage>
			</Section>
			<ButtonContainer>
				<Row>
					<a href="https://andyhall.vercel.app/" target="_blank" rel="noreferrer">
						View the Finished Site
					</a>
				</Row>
			</ButtonContainer>
		</>
	);
};
export default AndyHallFinal;
const Section = styled.div`
	margin-top: 150px;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	position: relative;
	background: url(${bgImg});
`;
const ContentWrap = styled.div`
	position: relative;
	min-height: 500px;
`;
const ContentText = styled.div`
	background: #fff;
	position: absolute;
	top: -33%;
	right: 20%;
	padding: 20px;
`;
const ContentFinal = styled.div`
	@media ${media.medium} {
		padding: 80px;
		padding-left: 25%;
	}
	padding-bottom: 50px;
	color: #000;
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p {
		margin-bottom: 30px;
	}
	h2 {
		font-size: 3em;
	}
`;
const RowImage = styled.div`
	min-height: 375px;
	position: relative;
	display: flex;
	flex: 0 1 auto;
	flex-direction: row;
	flex-wrap: wrap;
	max-width: 1200px;
	margin-right: auto;
	margin-left: auto;
	justify-content: center;
	margin-bottom: -140px;
`;
const ButtonContainer = styled.div`
	min-height: 100px;
	position: relative;
	background: #fff;
`;
const Row = styled.div`
	background: #55c3d5;
	display: flex;
	-webkit-box-flex: 0;
	-ms-flex: 0 1 auto;
	flex: 0 1 auto;
	-webkit-box-orient: horizontal;
	-webkit-box-direction: normal;
	-ms-flex-direction: row;
	flex-direction: row;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
	max-width: 1200px;
	margin-left: auto;

	a {
		font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1200 - 320));
		color: #fff;
		font-weight: 700;
		padding: 80px 50px 50px 50px;
		font-family: "Montserrat", sans-serif;
		position: relative;
	}
	a:after {
		content: "";
		position: absolute;
		width: 30px;
		height: 30px;
		top: 50%;
		right: 0;
		z-index: 0;
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23FFF' d='m23.968 0-23.968 10.286h13.68v13.714z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
	}
`;
