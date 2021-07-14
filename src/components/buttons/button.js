import React from 'react';
import styled from 'styled-components';
import { colors } from '../../defaults/styles';
const Button = (PropTypes) => {
	return <ButtonBtn href={PropTypes.link}>{PropTypes.children}</ButtonBtn>;
};
export default Button;
const ButtonBtn = styled.a`
	border: none;
	font-family: inherit;
	font-size: inherit;
	color: inherit;
	background: none;
	cursor: pointer;
	padding: 5px 20px;
	display: inline-block;
	margin: 0 30px;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: 700;
	outline: none;
	background: ${colors.blue800};
	//background: ${colors.button};
	color: #fff;
	box-shadow: 0 6px ${colors.buttonShadow};
	border-radius: 3px;
	transition: none;
	&:hover {
		box-shadow: 0 4px ${colors.buttonShadow};
		top: 2px;
	}
	&:active {
		-webkit-transition: all 0.3s;
		-moz-transition: all 0.3s;
		transition: all 0.3s;
		box-shadow: 0 0 ${colors.buttonShadow};
		top: 6px;
	}
`;
