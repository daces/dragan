import React from 'react';
import styled from 'styled-components';

import ideasImg from '/src/images/ideas.svg';
import designImg from '/src/images/design.svg';
import devImg from '/src/images/development.svg';
import overlayImg from '/src/images/overlay.svg';
import shineImg from '/src/images/shine.svg';
import linesImg from '/src/images/lines.svg';
const Process = () => {
	return (
		<>
<Separator/>
            <h2 style={{"gridColumn": "span 12"}}>Development process</h2>
			<Col className="first"><img src={ideasImg} alt='Your ideas'/>
            <img className="line"  style={{transform: "translateX(100px)"}}src={linesImg} alt="line"/>
                <h3>Your ideas</h3>
                <div className="content">
                <p>Don’t know what you need? I’ll help you build a plan of action which will help your business grow without creating lots more work.</p>
           </div>
            </Col>
            <Col className="second">
                <h3>Design</h3>
                <div className="content">
                <p>Thanks to our expertise we’ll offer you a couple of technologies, that will suit your interests best.</p>
           </div>
            <img className="line"  style={{transform: "translateX(100px) rotate(90deg)"}}src={linesImg} alt="line2"/>
                <img src={designImg} alt='Your ideas'/>
            </Col>
            <Col className="third"><img src={devImg} alt='Your ideas'/>
            <img className="line" style={{transform: "translateX(-40px) rotate(270deg)"}}src={linesImg} alt="line2"/>
                <h3>Development</h3>
                <div className="content">
                <p>I`ll will be happy to stay with you even after the project ends, handling your feature requests and maintenance, so you can grow your business in peace.</p>
           </div> 
           </Col>
		</>
	);
};
export default Process;
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
const Col = styled.div`
grid-column: span 4;
text-align: center;
.line {
    display: none;
}
h3,p {
    text-align: left;
}
.third,
.second&{
    margin-top: 100px;
}
@media (min-width: 768px) {
    .first&,
    .third&{
        margin-top: 200px;
    }
    .third,
    .second&{
        margin-top: 0;
    }
    .line {
        display: block;
    }
}
.second&{
    padding:40px 20px;
    background: url(${overlayImg});
    background-position: top;
    background-repeat: repeat;
    background-size: contain;
}
`;
