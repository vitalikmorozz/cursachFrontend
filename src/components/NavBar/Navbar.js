import React from 'react';
import styled from 'styled-components';

import CustomLink from './CustomLink';

const Nav = styled.nav`
	padding: 0px 30px;
	background: #487eb0;
	& > ul {
		list-style: none;
		display: flex;
		justify-content: center;
		& > li > a {
			outline: none;
			display: block;
			padding: 15px 10px;
			text-decoration: none;
			color: #f5f6fa;
			transition: 0.2s;
			position: relative;
			&::before {
				content: '';
				transition: 0.3s;
				display: block;
				position: absolute;
				bottom: 13px;
				left: 50%;
				width: 3px;
				border-radius: 3px;
				height: 2px;
				background: white;
			}
			&:hover {
				background: #40739e;
				&::before {
					width: 80%;
					left: 10%;
				}
			}
			&.active {
				background: #40739e;
				&::before {
					width: 80%;
					left: 10%;
				}
			}
		}
	}
`;

const Navbar = () => {
	return (
		<Nav>
			<ul>
				<li>
					<CustomLink to="/" activeOnlyWhenExact={true}>
						Home
					</CustomLink>
				</li>
				<li>
					<CustomLink to="/client">Clients</CustomLink>
				</li>
				<li>
					<CustomLink to="/doctor">Doctor</CustomLink>
				</li>
				<li>
					<CustomLink to="/medicament">Medicament</CustomLink>
				</li>
				<li>
					<CustomLink to="/recipe">Recipe</CustomLink>
				</li>
				<li>
					<CustomLink to="/order">Order</CustomLink>
				</li>
				<li>
					<CustomLink to="/ingredient">Ingredient</CustomLink>
				</li>
				<li>
					<CustomLink to="/orderArchive">Order Archive</CustomLink>
				</li>
				<li>
					<CustomLink to="/medicamentCreation">Medicament Creation</CustomLink>
				</li>
				<li>
					<CustomLink to="/medicamentType">Medicament Type</CustomLink>
				</li>
				<li>
					<CustomLink to="/medicamentUsage">Medicament Usage</CustomLink>
				</li>
			</ul>
		</Nav>
	);
};

export default Navbar;
