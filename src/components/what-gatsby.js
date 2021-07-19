import React from 'react';
import styled from 'styled-components';

import useMedia from '../defaults/useMedia';

import svgImg from '/src/images/gatsbyjs-logo.svg';
import bgImg from '/src/images/rect.svg';
import linesImg from '/src/images/lines.svg';
import { media } from '../defaults/media';
const WhatGatsby = () => {
	// const useMedia = (query) => {
	// 	const windowGlobal = typeof window !== 'undefined' && window
	// 	const [matches, setMatches] = useState(typeof window !=='undefined' && window.matchMedia(query).matches);
	
	// 	useEffect(() => {
	// 	  const media = windowGlobal.matchMedia(query)
	// 	  if (media.matches !== matches) setMatches(media.matches)
	// 	  const listener = () => setMatches(media.matches)
	// 	  media.addEventListener('change', listener)
	// 	  return () => media.removeEventListener('change', listener)
	// 	}, [matches, query])
	
	// 	return matches
	//   }
	return (
		<>
			<What />
			<Title>Freelance Gatsby developer</Title>
			<Image>
				{/* <img src={svgImg} width={150} alt="gatsby logo" /> */}
			</Image>

			<Content className="content">
				<p>Are You Looking For A Freelance Gatsby Developer?</p>
				<p>
				Maximize your business potential with performant websites built with the latest, innovative technologies.
				</p>
			</Content>

			<Title>SAY HELLO TO <span>BETTER</span> PROGRESSIVE WEB APPS</Title>

			<Options>
				<SubTitle>
					better <span>speed</span>
				</SubTitle>
				<div className="content">
				<p>
					What if your website could have better speed?<br/>
					New Google ranking factor starting May 2021. No database means no time-consuming multiple queries. Static sites are faster sites, even up to 10x.
				</p>
				</div>
			</Options>
			<Options>
				<SubTitle>
					better <span>security</span>
				</SubTitle>
				<div className="content">
				<p>
					What if you had a secure website?<br/> Static websites with no plugins or databases are like a fortress. Plus, more secure site means fewer security expenses.
				</p> 
				</div>
				<div style={{position: "relative"}}>
				<img className="line" style={{transform: "translateX(0) rotate(270deg)", position: "absolute", bottom:"-10vh", right: 0  }}src={linesImg} alt="line2"/>
				{useMedia('(min-width: 768px)') ? <img className="line" style={{transform: "translatey(250px) translateX(260px) rotate(90deg)",position: "absolute", bottom:"-10vh" , right: 0 }}src={linesImg} alt="line2"/>: ""}
				</div>
             
			</Options>
			<Options>
				<SubTitle>
					better <span>quality</span>
				</SubTitle>
				<div className="content">
				<p>
					What if you could have better quality?<br/>
					Simply because clicking and walking through your website feels like a walk in a park on a sunny day with no
					unexpected turns, stairs, or dead ends.
				</p>
				</div>
			</Options>
		</>
	);
};
export default WhatGatsby;
const What = styled.div`
	position: relative;
	grid-column: col-start / span 12;
	&::after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: -20px;
		right: -20px;
		height: 130vh;
		z-index: -1;
		background: url(${bgImg});
		background-position: top;
		background-repeat: repeat;
		background-size: contain;
	}
`;
const Title = styled.h2`
	padding-top: 20px ;
	text-align: center;
	text-transform: uppercase;
	grid-column: col-start / span 12;
	span { color:#3c5ab9;}
	@media ${media.medium} {
		text-align: left;
	}
`;
const Image = styled.div`
	text-align: center;
	grid-column: col-start / span 3;
	display: flex;
	align-items: baseline;
	justify-content: center;
`;
const Content = styled.div`
	grid-column: col-start 4 / span 9;
	//grid-row: 3;
	p{
		margin-bottom: .5em;
	}
	margin-bottom: 5em;
`;

const Options = styled.div`
	grid-column: span 4;
`;
const SubTitle = styled.h3`
	color: #3c5ab9;
	text-transform: uppercase;
	span {
		text-transform: capitalize;
		color: #fff;
	}
`;
