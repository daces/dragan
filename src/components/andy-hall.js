import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import bgImg from "/src/images/rect.svg";
import { media } from "../defaults/media";
const AndyHallComponent = () => {
	return (
		<Wrap>
			<SectionIntro className="section">
				<Row>
					<Content>
						<What />
						<h6 class="subtitle">Phase 1</h6>
						<h2>Prototyping</h2>
						<p></p>
						<p>
							Andy Hall came to us at an exciting time for their business – they were
							relaunching a new version of their app, so their website’s creative
							needed to be completely realigned. This included a rebrand with a new
							logo, and new brand positioning.
						</p>
						<p>
							This was a fun website redesign because the new look and feel was totally
							open to be explored. Our big goal was to craft a visually colourful
							design that was able to present his product in a colourful and, enticing
							way.
						</p>
						<p></p>
					</Content>

					<ImageCol>
						{/* <img src={imageHeader} alt="desktop version" /> */}
						<StaticImage
							src="../images/mockup-f.png"
							alt="desktop version"
							placeholder="blurred"
							layout="fullWidth"
							width={200}
							height={200}
						/>
					</ImageCol>
				</Row>
			</SectionIntro>
		</Wrap>
	);
};
export default AndyHallComponent;
const What = styled.div`
	position: relative;
	grid-column: col-start / span 12;
	&::after {
		content: "";
		position: absolute;
		top: -30px;
		bottom: 0;
		left: -40px;
		right: 0;
		height: 100vh;
		z-index: 0;
		background: url(${bgImg});
		background-position: top;
		background-repeat: repeat;
		background-size: contain;
	}

	@media ${media.medium} {
		right: -20px;
	}
`;
const Wrap = styled.div``;
const SectionIntro = styled.div`
	position: relative;
	height: 100vh;
	padding-bottom: 80px;
	padding-top: 80px;
	&:after {
		content: "";
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #000;
		opacity: 0.5;
		z-index: 0;
	}
`;
const Row = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	@media ${media.medium} {
		flex: 0 1 auto;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		max-width: 1200px;
		margin-right: auto;
		margin-left: auto;
	}
`;
const Content = styled.div`
	z-index: 2;
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
	position: relative;
	@media ${media.medium} {
		padding: 40px;
		flex-basis: calc(5 / 12 * 100%);
		max-width: calc(5 / 12 * 100%);
	}
`;
const ImageCol = styled.div`
	@media ${media.medium} {
		position: absolute;
		min-height: 85%;
		width: 55%;
		bottom: 0;
		right: 0;
		background-size: cover;
		background-repeat: no-repeat;
	}
	z-index: 2;
`;
