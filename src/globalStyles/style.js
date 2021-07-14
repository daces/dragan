import React from 'react';
import { Global, css } from '@emotion/react';
import { colors } from '../defaults/styles';
import { media } from '../defaults/media';
const GlobalCss = () => {
	return (
		<>
			<Global
				styles={css`
					*,
					*:after,
					*:before {
						-webkit-box-sizing: border-box;
						-moz-box-sizing: border-box;
						box-sizing: border-box;
					}
					blockquote, body, dd, dl, dt, figcaption, figure, h1, h2, h3, h4, h5, h6, hr, html, li, ol, p, pre, table, ul {
						margin: 0;
						padding: 0;
					}
					@font-face {
						font-family: 'Open Sans', sans-serif;
						font-weight: 400;
						font-style: normal;
						font-display: fallback;
					}
					html {
						background: #020433;
						font-size: 100%;
					}
					body {
						font-family: 'Open Sans', sans-serif;
						overflow-x: hidden;
						font-size: 16px;
						line-height: 1.7;
						color: #fff;
						-webkit-font-smoothing: antialiased;
					}
					a {
						text-decoration: none;
					}
					nav ul,
					nav ol,
					ul,
					ol {
						list-style: none;
						list-style-image: none;
						margin: 0;
						padding: 0;
					}
					nav {
						font-family: system-ui;
						letter-spacing: 1.2px;
					}
					img {
						max-width: 100%;    margin: 30px 0;
					}
					@media ${media.medium}{
						img{
							margin: 0;
						}
					}
					h1, h2, h3, h4, h5, h6 {
						font-weight: 700;
						//margin: 0 0 .5em;
					}
					dl, ol, p, table, ul {
						//margin: 0 0 1em;
					}
					h1{
						font-size: 3.5rem;
						line-height: 1;
						color: ${colors.white};
						text-align: center;
						margin: 0 0 .5em;
					}
					h2 {
						font-size: 1.953rem;
						font-size: 1.5rem;
						line-height: 1.08;
						padding: 0 5px;
					}
					h3 {
						font-size: 1.563rem;
						padding: 0 5px;
					}
					h4 {
						font-size: 1.25rem;
						padding: 0 5px;
					}
					p {
						font-size: 18px;
						font-size: 1.125rem;
						line-height: 1.5;
						letter-spacing: 0.5px;
					}
					p:first-of-type {
						//margin-top:1.25em;
					}
					.content {
						padding: 8px;
					}
				`}
			/>
		</>
	);
};
export default GlobalCss;
