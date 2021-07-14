import React from 'react';
import styled from 'styled-components';

import linesImg from '/src/images/lines.svg';

// import projectImg1 from "../images/project1.png"
// import projectImg2 from "../images/project2.png"
import projectImg1 from "../images/project1.jpg"
import projectImg2 from "../images/project2.jpg"
import { media } from '../defaults/media';
const Portfolio = () => {
	return (
		<Wrap>
            <h2>Projects</h2>
            <div>
                <LeftCol><img src={projectImg2} alt="project 2" /></LeftCol>
                <RightCol>
                    <h4>Web Design</h4>
                    <h2>Andy hall website</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit  eiusmod tempor.</p>
                    <a href="https://andyhall.vercel.app/" rel="noreferrer" target="_blank">Details<span>→</span></a>
                </RightCol>
            <span className="line-wrap">
                <img className="line" src={linesImg} alt="line projects" />
            </span>
            </div>


            <div>
                <LeftCol><img src={projectImg1} alt="project 1" /></LeftCol>
                <RightCol>
                    <h4>Web Design</h4>
                    <h2>Portfolio Site</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit  eiusmod tempor.</p>
                    <a href="/">Details<span>→</span></a>
                </RightCol>
            </div>

            
            <div>
                <LeftCol><img src={projectImg1} alt="project 1" /></LeftCol>
                <RightCol>
                    <h4>Web Design</h4>
                    <h2>Portfolio Site</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit  eiusmod tempor.</p>
                    <a href="/">Details<span>→</span></a>
                </RightCol>
            </div>
		</Wrap>
	);
};
export default Portfolio;
const Wrap = styled.div`
& > h2 {
    text-align: center;
    grid-column: col-start /span 12;
    margin-bottom: 2em;
}
.line-wrap {
    position: relative;
    img {
        position: absolute;
        right: 0;
        transform: translateX(15px) translateY(-15px) rotate(180deg);
    }
}
& > div {
    margin-bottom: 2em;
    box-shadow: 0 0 20px 0px #001876;
}
@media ${media.medium}{
grid-column: col-start / span 12;
& > h2 {
    text-align: left;
}
    & > div {
        grid-template-columns: 1fr 1fr;
        display: grid;
    }
    & > div:nth-child(odd) > div {
        &:nth-child(2n+1){
            order: 2;
        }
        &:nth-child(2n+2){
            order: 1;
        }
    }
    & > div:nth-child(even) > div{
        &{
            padding: 60px 0 60px 80px;
        }
    }
    .line-wrap {
        img {
            right: 40%;
            transform: translateX(510px) translateY(15px) rotate(180deg);
        }
    }
}
}

@media ${media.large}{
    & > div:nth-child(even) > div{
        &{
            padding: 80px 0 80px 100px;
        }
    }
}
`;
const LeftCol = styled.div`
position:relative;
padding: 0;
// padding: 60px 50px 0 50px;
&::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    background: #fff;
    opacity: .4;
}
img{
    margin:0 0 -8px 0;
}
@media ${media.small}{
    padding: 60px 50px 0 50px;
}
@media ${media.medium}{
    display: flex;
    flex-direction: column;
    padding: 60px 80px 60px 0;
}
@media ${media.large}{
    display: flex;
    flex-direction: column;
    padding: 80px 100px 80px 0;
}

`;
const RightCol = styled.div`
padding: 30px;
background: #fff;
color: #333;
h2,h4,p{
    margin-bottom: .5em;
}
h4 {
    color: #9e9e9e;
    margin-bottom: 3em;
}
p{
    padding:0 5px;
}
a{
    color: #333;
    text-transform: capitalize;
    text-decoration: none;
    font-weight: bold;
    margin-left: 5px;
    span {
        font-weight: 900;
        font-size: 1.5em;
        margin-left: 1em;
        -webkit-transform: translateX(-8px);
        -ms-transform: translateX(-8px);
        transform: translateX(-8px);
        display: inline-block;
        -webkit-transition: -webkit-transform 400ms ease-in-out;
        -webkit-transition: transform 400ms ease-in-out;
        transition: transform 400ms ease-in-out;
    }
}
a:hover span {
    -webkit-transform: translateX(0px);
    -ms-transform: translateX(0px);
    transform: translateX(0px);
    opacity: 1;
    -webkit-transition: -webkit-transform 150ms ease-in-out;
    -webkit-transition: transform 150ms ease-in-out;
    transition: transform 150ms ease-in-out;
}
@media ${media.medium}{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
`;
