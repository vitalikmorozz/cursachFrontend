import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import './table.css';

import Button from '../UIElements/Button';
import { TableContext } from './TableContext';

const TableRow = ({ item }) => {
	const { table } = useParams();
	const { deleteItem } = useContext(TableContext);

	const tableRow = Object.values(item).map((value, i) => <td key={`${item.id}-${i}`}>{value === !!value ? (value ? 'yes' : 'no') : value}</td>);
	tableRow.push(
		<td key={`${item.id}-delete`}>
			<Button
				onClick={() => {
					deleteItem(table, item.id);
				}}
			>
				✖
			</Button>
		</td>
	);
	tableRow.push(
		<td key={`${item.id}-edit`}>
			<Link to={`/${table}/edit/${item.id}`}>
				<Button>🖊</Button>
			</Link>
		</td>
	);
	return <tr key={item.id}>{tableRow}</tr>;
};

export default TableRow;
