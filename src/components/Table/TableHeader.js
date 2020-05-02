import React, { useContext } from 'react';

import SortButton from '../UIElements/SortButton';
import { TableContext } from './TableContext';

const TableHeader = ({ item }) => {
	const { setSortField } = useContext(TableContext);

	const tableHeader = Object.keys(item)
		.map((columnName) => columnName[0].toUpperCase() + columnName.slice(1))
		.map((value, i) => (
			<th key={`${item.id} ${i}`}>
				{value}
				<SortButton onClick={() => setSortField(value[0].toLowerCase() + value.slice(1))}>⇅</SortButton>
			</th>
		));
	tableHeader.push(<th key={`${item.id}-delete`}>Delete</th>);
	tableHeader.push(<th key={`${item.id}-edit`}>Edit</th>);
	return <tr key={item.id}>{tableHeader}</tr>;
};

export default TableHeader;
