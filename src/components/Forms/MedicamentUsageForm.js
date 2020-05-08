import React, { useState, useEffect } from 'react';

import './form.css';

const MedicamentUsageForm = (props) => {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');

	useEffect(() => {
		setName(props.obj?.name || '');
		setDescription(props.obj?.description || '');
	}, [props.obj]);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.postObject({
			id: props.obj?.id || '',
			name,
			description,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Medicament Usage editor</h1>
			<label htmlFor="name">Name</label>
			<input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

			<label htmlFor="description">Description</label>
			<input type="text" name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

			<input type="submit" value="Submit" />
		</form>
	);
};

export default MedicamentUsageForm;
