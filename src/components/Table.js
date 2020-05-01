import React, { useState } from 'react';

import SortButton from './SortButton';

const Table = ({ itemList, filter }) => {
	const [sortField, setSortField] = useState('');
	const unusedField = ['dateCreated', 'dateModified'];

	const tableHeader = Object.keys(itemList[0])
		.filter((columnName) => !unusedField.includes(columnName))
		.map((columnName) => columnName[0].toUpperCase() + columnName.slice(1))
		.map((columnName, i) => (
			<th key={i}>
				{columnName} <SortButton setSortField={setSortField} fieldName={columnName} />
			</th>
		));

	const isContainsField = (obj, field = '') => {
		const objectValues = Object.values(obj);
		for (let i = 0; i < objectValues.length; i++) if (String(objectValues[i]).includes(field)) return true;
	};

	const tableBody = Object.values(itemList)
		.filter((item) => isContainsField(item, filter))
		.sort((a, b) => (a[sortField] > b[sortField] ? 1 : b[sortField] > a[sortField] ? -1 : 0))
		.map((tableItem) =>
			Object.keys(tableItem)
				.filter((propertyName) => !unusedField.includes(propertyName))
				.map((filteredKeys, i) => tableItem[filteredKeys])
		)
		.map((filteredFields) => (
			<tr key={filteredFields[0]}>
				{filteredFields.map((item, i) => (
					<td key={`${filteredFields[0]}` + i}>{item}</td>
				))}
			</tr>
		));

	return (
		<table>
			<thead>
				<tr>{tableHeader}</tr>
			</thead>
			<tbody>{tableBody}</tbody>
		</table>
	);
};

export default Table;
