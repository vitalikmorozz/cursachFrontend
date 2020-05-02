import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import Button from '../UIElements/Button';
import { TableContext } from './TableContext';

const TableRow = ({ item }) => {
	const { table } = useParams();
	const { deleteItem } = useContext(TableContext);

	const tableRow = Object.values(item).map((value, i) => <td key={`${item.id}-${i}`}>{value}</td>);
	tableRow.push(
		<td key={`${item.id}-delete`}>
			<Button
				onClick={() => {
					deleteItem(table, item.id);
				}}
			>
				Delete
			</Button>
		</td>
	);
	tableRow.push(
		<td key={`${item.id}-edit`}>
			<Button>Edit</Button>
		</td>
	);
	return <tr key={item.id}>{tableRow}</tr>;
};

export default TableRow;
