import React, { useState, useEffect } from 'react';

import './form.css';

const MedicamentForm = (props) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState('');
	const [currentAmount, setCurrentAmount] = useState('');
	const [minimumAmount, setMinimumAmount] = useState('');
	const [expirationDate, setExpirationDate] = useState('');
	const [medicamentTypeId, setMedicamentTypeId] = useState('');
	const [medicamentUsageId, setMedicamentUsageId] = useState('');
	const [medicamentCreationId, setMedicamentCreationId] = useState('');

	useEffect(() => {
		setName(props.obj?.name || '');
		setDescription(props.obj?.description || '');
		setPrice(props.obj?.price || 0);
		setCurrentAmount(props.obj?.currentAmount || 0);
		setMinimumAmount(props.obj?.minimumAmount || 0);
		setExpirationDate(props.obj?.expirationDate || '');
		setMedicamentTypeId(props.obj?.medicamentTypeId || 0);
		setMedicamentUsageId(props.obj?.medicamentUsageId || 0);
		setMedicamentCreationId(props.obj?.medicamentCreationId || 0);
	}, [props.obj]);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.postObject({
			id: props.obj?.id || '',
			name,
			description,
			price,
			currentAmount,
			minimumAmount,
			expirationDate,
			medicamentTypeId,
			medicamentUsageId,
			medicamentCreationId,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Medicament editor</h1>
			<label htmlFor="name">Name</label>
			<input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

			<label htmlFor="description">Description</label>
			<input type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

			<label htmlFor="price">Price</label>
			<input type="number" name="price" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />

			<label htmlFor="currentAmount">Current Amount</label>
			<input
				type="number"
				name="currentAmount"
				id="currentAmount"
				value={currentAmount}
				onChange={(e) => setCurrentAmount(e.target.value)}
				required
			/>

			<label htmlFor="minimumAmount">Minimum Amount</label>
			<input
				type="number"
				name="minimumAmount"
				id="minimumAmount"
				value={minimumAmount}
				onChange={(e) => setMinimumAmount(e.target.value)}
				required
			/>

			<label htmlFor="expirationDate">Expiration Date</label>
			<input
				type="date"
				name="expirationDate"
				id="expirationDate"
				value={expirationDate}
				onChange={(e) => setExpirationDate(e.target.value)}
				required
			/>

			<label htmlFor="medicamentTypeId">Medicament Type Id</label>
			<input
				type="number"
				name="medicamentTypeId"
				id="medicamentTypeId"
				value={medicamentTypeId}
				onChange={(e) => setMedicamentTypeId(e.target.value)}
				required
			/>

			<label htmlFor="medicamentUsageId">Medicament Usage Id</label>
			<input
				type="number"
				name="medicamentUsageId"
				id="medicamentUsageId"
				value={medicamentUsageId}
				onChange={(e) => setMedicamentUsageId(e.target.value)}
				required
			/>

			<label htmlFor="medicamentCreationId">Medicament Creation Id</label>
			<input
				type="number"
				name="medicamentCreationId"
				id="medicamentCreationId"
				value={medicamentCreationId}
				onChange={(e) => setMedicamentCreationId(e.target.value)}
				required
			/>

			<input type="submit" value="Submit" />
		</form>
	);
};

export default MedicamentForm;
