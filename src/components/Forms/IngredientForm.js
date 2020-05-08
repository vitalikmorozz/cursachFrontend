import React, { useState, useEffect } from 'react';

import './form.css';

const IngredientForm = (props) => {
	const [name, setName] = useState('');
	const [currentAmount, setCurrentAmount] = useState(0);
	const [price, setPrice] = useState(0);
	const [expirationDate, setExpirationDate] = useState('');

	useEffect(() => {
		setName(props.obj?.name || '');
		setCurrentAmount(props.obj?.currentAmount || 0);
		setPrice(props.obj?.price || 0);
		setExpirationDate(props.obj?.expirationDate || '');
	}, [props.obj]);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.postObject({
			id: props.obj?.id || '',
			name,
			currentAmount,
			price,
			expirationDate,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Ingredient editor</h1>
			<label htmlFor="name">Name</label>
			<input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

			<label htmlFor="currentAmount">Current Amount</label>
			<input
				type="number"
				name="currentAmount"
				id="currentAmount"
				value={currentAmount}
				onChange={(e) => setCurrentAmount(e.target.value)}
				required
			/>

			<label htmlFor="price">Price</label>
			<input type="number" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />

			<label htmlFor="expirationDate">Expiration Date</label>
			<input
				type="date"
				name="expirationDate"
				id="expirationDate"
				value={expirationDate}
				onChange={(e) => setExpirationDate(e.target.value)}
				required
			/>

			<input type="submit" value="Submit" />
		</form>
	);
};

export default IngredientForm;
