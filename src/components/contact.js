import React from 'react';
import styled from 'styled-components';

import star from "../images/star.svg"
import { media } from '../defaults/media';
import { assets } from '../defaults/assets';
const Contact = () => {
	return (
		<Wrap>
            <Separator/>
			<h2>Ready to create your business?</h2>
            <a href={assets.mailto}>Contact me</a>
		</Wrap>
	);
};
export default Contact;
const Wrap = styled.div`
position: relative;
grid-column: col-start / span 15;

h2 {
    font-size: 2em;
    position: absolute;
    top: 40%;
    left: 15%;
}
a {
    font-size: 1em;
    color: #fff;
    text-transform: uppercase;
    border-bottom: 3px solid #fff;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%,-50%);
}
@media ${media.medium} {
    h2{
    font-size: 4em;
    top: 51%;
    left: 50%;
    transform: translate(-50%, -50%);
    }
    a {
        font-size: 2em;
        top: 80%;
    }
}
@media (min-width:1440px) {
    h2{
        top: 38%;
        left: 55%;
    }
    a{
        top: 59%;
    }
}

`;
const Separator = styled.div`
position: relative;
height: 60vh;
grid-column: span 12;
&::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 68vh;
    z-index: -1;
    background: url(${star});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 260%;
}
@media ${media.medium} {
    &::after {
        background-size: cover;
    }
}
@media (min-width:1440px) {
    height: 100vh;
    &::after {
        height: 100vh;
    }
}
`;