import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import { media } from "../defaults/media";

const AndyHallHomePage = () => {
	return (
		<>
			<Section>
				<Row>
					<HomePage>
						<h6>Home Page Design</h6>
						<StaticImage src="../images/ah-full.jpg" alt="home pagee" />
					</HomePage>
					<ContentColumn>
						<Content>
							<h6>Phase 2</h6>
							<h2>Style Concepts</h2>
							<p>
								Andy Hall had their softly colourful new branding locked in, and it was
								up to me to create a design that fully utilized it. Where their old site
								was largely white and images, the new site brought in photography to
								humanize their highly technical offering. The overall effect is more
								youthful, authentic & colourful, in keeping with the older Millennial
								aesthetic.
							</p>
						</Content>
						<ContentImg>
							<StaticImage src="../images/ah-works.jpg" alt="home pagee" />
						</ContentImg>
					</ContentColumn>
				</Row>
			</Section>
		</>
	);
};
export default AndyHallHomePage;
const Section = styled.div`
	margin-top: 100px;
	position: relative;
	padding-top: 100px;
	padding-bottom: 200px;
	&:before {
		content: "";
		position: absolute;
		top: -30px;
		bottom: 0;
		right: 40px;
		height: 70%;
		width: 74%;
		background: #fff;
		opacity: 0.2;
		z-index: 0;
	}
	@media ${media.medium} {
		right: -40px;
	}
`;
const Row = styled.div`
	@media ${media.medium} {
		display: flex;
		flex: 0 1 auto;
		flex-direction: row;
		flex-wrap: wrap;
		max-width: 1200px;
		margin-right: auto;
		margin-left: auto;
		justify-content: center;
	}
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
const HomePage = styled.div`
	@media ${media.medium} {
		flex-basis: calc(6 / 12 * 100%);
		max-width: calc(6 / 12 * 100%);
	}
	padding-left: 10px;
	padding-right: 10px;
`;
const ContentColumn = styled.div`
	@media ${media.medium} {
		flex-basis: calc(6 / 12 * 100%);
		max-width: calc(6 / 12 * 100%);
	}
	padding-left: 10px;
	padding-right: 10px;
`;
const Content = styled.div``;
const ContentImg = styled.div``;
