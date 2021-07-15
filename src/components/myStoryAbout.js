import React from 'react';
import styled from 'styled-components';

import overlay from "../images/overlay.svg"



import photoImg from "/src/images/photography.jpg"
import walkImg from "/src/images/long-walks.jpg"
import readImg from "/src/images/reading.jpg"
const MyStoryAbout = () => {
    // const data = useStaticQuery(graphql`
    
    
    // `)
	return (
		<>
			<Work>Now I design and develop beautiful websites which focus on providing the best experience for everyone using them, ensuring they are easy for your team to edit while also delivering the best experience for your users.</Work>
            <Hobby>
                <img src={photoImg} alt="enjoying capturing beautiful moments here on earth :)" />
                <p>I often find my self taking snapshots of places, people, food etc @discoverfeelings</p>
            </Hobby>
            <Hobby className="overlay">
            <Separator/>
                <img src={walkImg} alt="Dragan waving hands in barcelona mount tibidabo :)" />
                <p>I enjoy 40+km walks mostly along the river thames.</p>
            </Hobby>
            <Hobby>
                <img src={readImg} alt="Reading book in gunsbury park, lovely autumn trees in background :)" />
                <p>I love reading books anything psychology, self-improvement & health.</p>
            </Hobby>

            <Fact>Fun facts about me:<br/><br/>
<ul>
<li>Love the universe you can tell by the look of the website :).</li>
<li>I used to hate books now I read daily.</li>
<li>Watched over 600+ movies mostly sci-fi, now I don't watch any.</li>
<li>Quite focused on healthy lifestyle, cooking, meditating, enlightement.</li>
<li>The meaning of my name "Dragan" is "dear person", here in UK everyone calls me Dragon.</li>
<li>I`m solution orientated maybe that's why companies don't like me</li>
</ul>
</Fact>

</>
	);
};
export default MyStoryAbout;
const Separator = styled.div`
position: relative;
height:100px;
grid-column: span 12;
&::after {
    content: '';
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: -23px;
    right: -23px;
    height: 110vh;
    z-index: -1;
    background: url(${overlay});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}
@media (min-width: 768px) {
&::after {
    left: -190px;
    right: -160px;
    height: 100vh;
}
}
`;
const Work = styled.div`
grid-column: col-start 3/ span 9;
`;
const Hobby = styled.div`
position: relative;
grid-column: span 4;
@media (min-width: 768px) {
    padding: 30px;
}
p{
    margin-bottom: 10px;
}
`;
const Fact = styled.div`
grid-column: col-start 4/ span 9;
padding: 20px;
margin-top: 50px;
margin-bottom: 50px;
li{
    position: relative;
}
ul li:after {
    position: absolute;
    left: -30px;
    top: 0;
}
ul li:nth-child(1):after {
    content: "🌌.";
}
ul li:nth-child(2):after {
    content: "📚.";
}
ul li:nth-child(3):after {
    content: "🛑.";
}
ul li:nth-child(4):after {
    content: "🥦.";
}
ul li:nth-child(5):after {
    content: "🐉.";
}
ul li:nth-child(6):after {
    content: "🏆.";
}
`;