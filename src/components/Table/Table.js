import React, { useContext } from 'react';

import TableRow from './TableRow';
import TableHeader from './TableHeader';
import { TableContext } from './TableContext';

const Table = () => {
	const { list, filter, sortField } = useContext(TableContext);

	const isContainsField = (obj, field = '') => {
		const objectValues = Object.values(obj);
		for (let i = 0; i < objectValues.length; i++) if (String(objectValues[i]).includes(field)) return true;
	};

	const tableHeader = <TableHeader item={list[0]} />;
	const tableBody = list
		.filter((item) => isContainsField(item, filter))
		.sort((a, b) => (a[sortField] > b[sortField] ? 1 : b[sortField] > a[sortField] ? -1 : 0))
		.map((item) => <TableRow key={item.id} item={item} />);

	return (
		<table>
			<thead>{tableHeader}</thead>
			<tbody>{tableBody}</tbody>
		</table>
	);
};

export default Table;
