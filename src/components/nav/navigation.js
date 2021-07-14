import React, { useState } from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { Link } from 'gatsby';
import { colors } from '../../defaults/styles';
import { media } from '../../defaults/media';
import Button from '../buttons/button';
import useMedia from '../../defaults/useMedia';
import { assets } from '../../defaults/assets';

const navItems = ['My Story', 'projects', 'contact'];

const Navigation = () => {
	const [menuStatus, setMenuStatus] = useState('closed');
	const [linkStatus, setlinkStatus] = useState('');

	const MenuOpen = () => {
		menuStatus === 'open' ? setMenuStatus('closed') : setMenuStatus('open');
	};
	const LinkClick = (e) => {
		setlinkStatus(e);
		console.log(e);
	};
	return (
		<Headroom
			style={{
				position: 'fixed',
			}}
			wrapperStyle={{
				position: 'fixed',
				"zIndex": 2
			}}
		>
			<Menu className={menuStatus}>
				<NavLogo to="/">
					<h4>Dragan Manchikj</h4>
				</NavLogo>
				<Nav >
					<ul className={menuStatus}>
						{navItems.map((link, idx) => {
							return (
								<li key={`${idx} + wdd24d`}>
									<NavLink
										className={linkStatus === idx ? 'open' : ''}
										// to="/"
										to={`/${link
											.replace(/[^\w\s]/, '')
											.toLowerCase()
											.replace(/\s/, '-')}`}
										onClick={(e) => {
											LinkClick(idx);
										}}
									>
										{link}
									</NavLink>
								</li>
							);
						})}
					</ul>
				</Nav>

				<MobiBtn className={menuStatus} onClick={MenuOpen}>
					<span className="line line--1"></span>
					<span className="line line--2"></span>
					<span className="line line--3"></span>
					{/* <span className="menu-btn__open">Menu</span>
					<span className="menu-btn__close">Close</span> */}
				</MobiBtn>
				
				{ useMedia('(min-width: 768px)') ? 
				<Btn>
					<Button link={assets.mailto}>Contact</Button>
				</Btn>
				: "" }
			</Menu>
		</Headroom>
	);
};

export default Navigation;
const Btn = styled.div`
	display: inline-block;
	float: right;
`;
const Menu = styled.menu`
	background: linear-gradient(0deg, rgba(2, 2, 30, 0.0001), #02021e 98%);
	margin: 0 ;
	zoom: 1;
    padding: 16px 24px;
    position: relative;
	@media ${media.xLarge} {
		&.open nav {
			-webkit-transform: translate3d(0, 0, 0);
			-moz-transform: translate3d(0, 0, 0);
			-ms-transform: translate3d(0, 0, 0);
			-o-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
		&.open nav li {
			opacity: 1;
			-webkit-transform: translate3d(0, 0, 0);
			-moz-transform: translate3d(0, 0, 0);
			-ms-transform: translate3d(0, 0, 0);
			-o-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
		}
	}
`;
const Nav = styled.nav`
	display: inline-block;
	text-align: right;
	font-size: 0;
	// -webkit-transform: translate(-50%, -50%);
	// -moz-transform: translate(-50%, -50%);
	// -ms-transform: translate(-50%, -50%);
	// -o-transform: translate(-50%, -50%);
	// transform: translate(-50%, -50%);
	@media ${media.large} {
		font-size: 14px;
		line-height: 17.5px;
		font-size: 1.4rem;
		line-height: 1.75rem;
	}
	@media ${media.xLarge} {
		display: flex;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: ${colors.navigationFaded};
		-webkit-transition: transform 0.6s cubic-bezier(0.665, 0, 0.43, 1);
		-moz-transition: transform 0.6s cubic-bezier(0.665, 0, 0.43, 1);
		-ms-transition: transform 0.6s cubic-bezier(0.665, 0, 0.43, 1);
		-o-transition: transform 0.6s cubic-bezier(0.665, 0, 0.43, 1);
		transition: transform 0.6s cubic-bezier(0.665, 0, 0.43, 1);
		-webkit-transform: translate3d(0, -100%, 0);
		-moz-transform: translate3d(0, -100%, 0);
		-ms-transform: translate3d(0, -100%, 0);
		-o-transform: translate3d(0, -100%, 0);
		transform: translate3d(0, -100%, 0);
	}
	@media ${media.xLarge} {
		& li {
			padding-right: 0;
			-webkit-transform: translateY(-100%);
			-moz-transform: translateY(-100%);
			-ms-transform: translateY(-100%);
			-o-transform: translateY(-100%);
			transform: translateY(-100%);
		}
		a.open {
			border-bottom: 2px solid ${colors.white};
		}
	}
	ul {
		justify-content: center;
		width: 100%;
		li {
			display: inline-block;
			padding: 0 16px;
		}
	}
	 .closed{
		display: none;
	}
	 .open{
		display:flex;
	}
	@media ${media.xLarge} {
		ul li,
		& a {
			display: flex;
		}
		ul {
			background: #020433;
			flex-direction: column;
			height: 100vh;
		}
		.open li {
			//opacity: 1;
			-webkit-transform: translateY(-100%);
			-moz-transform: translateY(-100%);
			-ms-transform: translateY(-100%);
			-o-transform: translateY(-100%);
			transform: translateY(-100%);
		}
		& .open li {
			opacity: 1;
			-webkit-transform: translate3d(0, 0, 0);
			-moz-transform: translate3d(0, 0, 0);
			-ms-transform: translate3d(0, 0, 0);
			-o-transform: translate3d(0, 0, 0);
			transform: translate3d(0, 0, 0);
			transition-duration: 1s;
		}
		& li:nth-child(1) {
			opacity: 0;
			-webkit-transition: all 0.1s cubic-bezier(0.665, 0, 0.43, 1) 0.1s;
			-moz-transition: all 0.1s cubic-bezier(0.665, 0, 0.43, 1) 0.1s;
			-ms-transition: all 0.1s cubic-bezier(0.665, 0, 0.43, 1) 0.1s;
			-o-transition: all 0.1s cubic-bezier(0.665, 0, 0.43, 1) 0.1s;
			transition: all 0.1s cubic-bezier(0.665, 0, 0.43, 1) 0.1s;

			//transition-delay: 0.5s;
		}
		& li:nth-child(2) {
			opacity: 0;
			-webkit-transition: all 0.2s cubic-bezier(0.665, 0, 0.43, 1) 0.2s;
			-moz-transition: all 0.2s cubic-bezier(0.665, 0, 0.43, 1) 0.2s;
			-ms-transition: all 0.2s cubic-bezier(0.665, 0, 0.43, 1) 0.2s;
			-o-transition: all 0.2s cubic-bezier(0.665, 0, 0.43, 1) 0.2s;
			transition: all 0.2s cubic-bezier(0.665, 0, 0.43, 1) 0.2s;
			//transition-delay: 0.6s;
		}
		& li:nth-child(3) {
			opacity: 0;
			-webkit-transition: all 0.3s cubic-bezier(0.665, 0, 0.43, 1) 0.3s;
			-moz-transition: all 0.3s cubic-bezier(0.665, 0, 0.43, 1) 0.3s;
			-ms-transition: all 0.3s cubic-bezier(0.665, 0, 0.43, 1) 0.3s;
			-o-transition: all 0.3s cubic-bezier(0.665, 0, 0.43, 1) 0.3s;
			transition: all 0.3s cubic-bezier(0.665, 0, 0.43, 1) 0.3s;
			//transition-delay: 0.7s;
		}
		& li:nth-child(4) {
			opacity: 0;
			-webkit-transition: all 0.4s cubic-bezier(0.665, 0, 0.43, 1) 0.4s;
			-moz-transition: all 0.4s cubic-bezier(0.665, 0, 0.43, 1) 0.4s;
			-ms-transition: all 0.4s cubic-bezier(0.665, 0, 0.43, 1) 0.4s;
			-o-transition: all 0.4s cubic-bezier(0.665, 0, 0.43, 1) 0.4s;
			transition: all 0.4s cubic-bezier(0.665, 0, 0.43, 1) 0.4s;
			//transition-delay: 0.8s;
			//transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1) 0.5s;
		}
		& li:nth-child(5) {
			opacity: 0;
			-webkit-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1) 0.5s;
			-moz-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1) 0.5s;
			-ms-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1) 0.5s;
			-o-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1) 0.5s;
			transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1) 0.5s;
			//transition-delay: 0.9s;
		}
		& li:nth-child(6) {
			opacity: 0;
			-webkit-transition: all 0.6s cubic-bezier(0.665, 0, 0.43, 1) 0.6s;
			-moz-transition: all 0.6s cubic-bezier(0.665, 0, 0.43, 1) 0.6s;
			-ms-transition: all 0.6s cubic-bezier(0.665, 0, 0.43, 1) 0.6s;
			-o-transition: all 0.6s cubic-bezier(0.665, 0, 0.43, 1) 0.6s;
			transition: all 0.6s cubic-bezier(0.665, 0, 0.43, 1) 0.6s;
			//transition-delay: 1s;
		}
		& li:nth-child(7) {
			opacity: 0;
			-webkit-transition: all 0.7s cubic-bezier(0.665, 0, 0.43, 1) 0.7s;
			-moz-transition: all 0.7s cubic-bezier(0.665, 0, 0.43, 1) 0.7s;
			-ms-transition: all 0.7s cubic-bezier(0.665, 0, 0.43, 1) 0.7s;
			-o-transition: all 0.7s cubic-bezier(0.665, 0, 0.43, 1) 0.7s;
			transition: all 0.7s cubic-bezier(0.665, 0, 0.43, 1) 0.7s;
			//transition-delay: 1.1s;
		}
		& li:nth-child(8) {
			opacity: 0;
			-webkit-transition: all 0.8s cubic-bezier(0.665, 0, 0.43, 1) 0.8s;
			-moz-transition: all 0.8s cubic-bezier(0.665, 0, 0.43, 1) 0.8s;
			-ms-transition: all 0.8s cubic-bezier(0.665, 0, 0.43, 1) 0.8s;
			-o-transition: all 0.8s cubic-bezier(0.665, 0, 0.43, 1) 0.8s;
			transition: all 0.8s cubic-bezier(0.665, 0, 0.43, 1) 0.8s;
			//transition-delay: 1.2s;
		}
		& li:nth-child(9) {
			transition-delay: 1.3s;
		}
		& li:nth-child(10) {
			transition-delay: 1.4s;
		}
		& a {
			flex: 1;
			justify-content: center;
			align-items: center;
			font-size: 26px;
			line-height: 32.5px;
			font-size: 2rem;
			line-height: 3.25rem;
			display: flex;
		}
	}
`;
const NavLogo = styled(Link)`
	display: inline-block;
	text-decoration: none;
	color: ${colors.navigationLinks};
	text-transform: uppercase;
`;

const NavLink = styled(Link)`
	font-size: .8em;
	padding: 10px 0;
	border-bottom: 2px solid transparent;
	vertical-align: bottom;
	color: ${colors.navigationLinks};
	text-decoration: none;
	text-transform: Capitalize;
`;

const MobiBtn = styled.a`
	@media ${media.xLarge} {
		display: block;
	}
	float: right;
	padding: 4px;
	z-index: 99;
	display: none;
	width: 32px;
	cursor: pointer;
	font-size: 10px;
	line-height: 12.5px;
	font-size: 1rem;
	line-height: 1.25rem;
	text-align: center;
	text-transform: uppercase;
	color: ${colors.navigationLinks};

	.line {
		display: block;
		width: 100%;
		height: 3px;
		margin-top: 5px;
		background-color: ${colors.navigationLinks};
		-webkit-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1);
		-moz-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1);
		-ms-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1);
		-o-transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1);
		transition: all 0.5s cubic-bezier(0.665, 0, 0.43, 1);
	}
	.menu-btn__open,
	.menu-btn__close {
		position: relative;
		top: 3px;
	}
	.menu-btn__close {
		display: none;
	}
	&.open .line--1 {
		-webkit-transform: rotate(45deg) translate3d(7px, 6px, 0);
		-moz-transform: rotate(45deg) translate3d(7px, 6px, 0);
		-ms-transform: rotate(45deg) translate3d(7px, 6px, 0);
		-o-transform: rotate(45deg) translate3d(7px, 6px, 0);
		transform: rotate(45deg) translate3d(7px, 6px, 0);
	}
	&.open .line--2 {
		opacity: 0;
	}
	&.open .line--3 {
		-webkit-transform: rotate(-45deg) translate3d(5px, -4px, 0);
		-moz-transform: rotate(-45deg) translate3d(5px, -4px, 0);
		-ms-transform: rotate(-45deg) translate3d(5px, -4px, 0);
		-o-transform: rotate(-45deg) translate3d(5px, -4px, 0);
		transform: rotate(-45deg) translate3d(5px, -4px, 0);
	}
	&.open .menu-btn__open {
		display: none;
	}
	&.open .menu-btn__close {
		display: block;
	}
`;
