import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';

import Table from './Table';
import Loader from '../UIElements/Loader';
import { TableContext } from './TableContext';

const TablePage = () => {
	const { setFilter, load, updateList } = useContext(TableContext);
	const { table } = useParams();

	useEffect(() => {
		updateList(table);
	}, [table]);

	return (
		<div>
			<input type="text" onInput={(e) => setFilter(e.target.value)} placeholder="Search" />
			{!load ? <Loader /> : <Table />}
		</div>
	);
};

export default TablePage;
