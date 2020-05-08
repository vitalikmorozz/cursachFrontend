import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import Table from './Table';
import Loader from '../UIElements/Loader';
import Button from '../UIElements/Button';
import { TableContext } from './TableContext';

const TablePage = () => {
	const { setFilter, load, updateList } = useContext(TableContext);
	const { table } = useParams();

	useEffect(() => {
		updateList(table);
	}, [table]);

	return (
		<div>
			<h1>{table[0].toUpperCase() + table.slice(1)} list</h1>
			<input type="text" onInput={(e) => setFilter(e.target.value)} placeholder="Search" />{' '}
			<Link to={`/${table}/edit`}>
				<Button>+</Button>
			</Link>
			{!load ? <Loader /> : <Table />}
		</div>
	);
};

export default TablePage;
