import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fetch from 'node-fetch';

import Table from './Table';

const TablePage = () => {
	const [filter, setFilter] = useState('');
	const [list, setList] = useState([]);
	const { table } = useParams();

	useEffect(() => {
		fetch(`http://localhost:8080/api/${table}/get/list`)
			.then((res) => res.json())
			.then(setList);
	}, [table]);

	if (list.length === 0) return <>Table is empty</>;

	return (
		<div>
			<input type="text" onInput={(e) => setFilter(e.target.value)} placeholder="Search" />
			<Table itemList={list} filter={filter} />
		</div>
	);
};

export default TablePage;
