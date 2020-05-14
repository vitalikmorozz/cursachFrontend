import React, { useState, createContext } from 'react';
import axios from 'axios';

export const TableContext = createContext();

export const TableProvider = (props) => {
	const [list, setList] = useState([]);
	const [load, setLoad] = useState(false);
	const [filter, setFilter] = useState('');
	const [sortField, setSortField] = useState('');

	const fetchData = (url) => {
		return new Promise((resolve, reject) => {
			// https://cursach-app.herokuapp.com/api/client/get/list
			axios
				.get(`https://cursach-app.herokuapp.com/api/${url}`)
				.then((res) => res.data)
				.then(resolve)
				.catch(reject);
		});
	};

	const postData = (url) => {
		return new Promise((resolve, reject) => {
			// https://cursach-app.herokuapp.com/api/client/get/list
			axios
				.post(`https://cursach-app.herokuapp.com/api/${url}`)
				.then((res) => res.data)
				.then(resolve)
				.catch(reject);
		});
	};

	const updateList = (table) => {
		return new Promise((resolve, reject) => {
			fetchData(`${table}/get/list`)
				.then((list) => {
					return list.map((item) => {
						delete item.dateCreated;
						delete item.dateModified;
						return item;
					});
				})
				.then(setList)
				.then(() => {
					setLoad(true);
				})
				.then(resolve)
				.catch(reject);
		});
	};

	const deleteItem = (table, id) => {
		return new Promise((resolve, reject) => {
			postData(`${table}/delete/${id}`)
				.then(() => updateList(table))
				.then(resolve)
				.catch(reject);
		});
	};

	return (
		<TableContext.Provider value={{ list, load, filter, sortField, setSortField, setFilter, updateList, deleteItem }}>
			{props.children}
		</TableContext.Provider>
	);
};
