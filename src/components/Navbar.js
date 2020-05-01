import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/client">Clients</Link>
				</li>
				<li>
					<Link to="/doctor">Doctor</Link>
				</li>
				<li>
					<Link to="/medicament">Medicament</Link>
				</li>
				<li>
					<Link to="/recipe">Recipe</Link>
				</li>
				<li>
					<Link to="/order">Order</Link>
				</li>
				<li>
					<Link to="/ingredient">Ingredient</Link>
				</li>
				<li>
					<Link to="/orderArchive">Order Archive</Link>
				</li>
				<li>
					<Link to="/medicamentCreation">Medicament Creation</Link>
				</li>
				<li>
					<Link to="/medicamentType">Medicament Type</Link>
				</li>
				<li>
					<Link to="/medicamentUsage">Medicament Usage</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
