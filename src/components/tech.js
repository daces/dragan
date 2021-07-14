import React from 'react';
import styled from 'styled-components';

import shineImg from '/src/images/shine.svg';
import linesImg from '/src/images/lines.svg';

import aws  from "../images/aws.svg"
import wordpress  from "../images/wordpress.svg"
import contentful  from "../images/contentful.svg"
import gatsby  from "../images/gatsby.svg"
import vercel  from "../images/vercel.svg"
import nextjs  from "../images/nextjs.svg"
import netlify  from "../images/netlify.svg"
import cloudflare  from "../images/cloudflare-pages.svg"

const Tech = () => {
	return (
		<Wrap>
            <Separator/>
			<h3>TECHNOLOGIES In USE</h3>
            <h1>Beautifying the web</h1>
            <h4>Headless CMS</h4>
            <img className="line" style={{transform: "translateX(-10px) translatey(-190px) rotate(0deg)"}}src={linesImg} alt="line2"/>
            <img src={contentful} alt="contentful"/>
            <img src={wordpress} alt="contentful"/>
            <h4>BUILD</h4>
            <img src={gatsby} alt="contentful"/>
            <img className="line" style={{transform: "translateX(30px) rotate(180deg)"}}src={linesImg} alt="line2"/>
            <img src={netlify} alt="contentful"/>
            <h4>DEPLOY & CDN</h4>
            <img src={cloudflare} alt="contentful"/>
            <img src={nextjs} alt="contentful"/>
            <img src={vercel} alt="contentful"/>
            <img className="line" style={{transform: "translateX(30px) translateY(-120px) rotate(0deg)"}}src={linesImg} alt="line2"/>
            <img src={aws} alt="contentful"/>
		</Wrap>
	);
};
export default Tech;
const Separator = styled.div`
position: relative;
height:100px;
grid-column: span 12;
&::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 130vh;
    z-index: -1;
    background: url(${shineImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}
`;
const Wrap = styled.div`
text-align:center;
grid-column: col-start / span 12;
h1,h3,h4 {
    grid-column: col-start / span 12;
}
h1 {

}
h3, h4{
    text-transform: uppercase;
}
img {
    vertical-align: middle;
    margin: 25px;
}
.line {
    position: absolute;
    left: 0;
}
`;
