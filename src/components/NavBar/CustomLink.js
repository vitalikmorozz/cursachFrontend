import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

const CustomLink = (props) => {
	let match = useRouteMatch({
		path: props.to,
		exact: props.activeOnlyWhenExact,
	});
	return (
		<Link to={props.to} className={match ? 'active' : ''}>
			{props.children}
		</Link>
	);
};

export default CustomLink;
