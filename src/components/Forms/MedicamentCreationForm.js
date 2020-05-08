import React, { useState, useEffect } from 'react';

import './form.css';

const MedicamentCreationForm = (props) => {
	const [name, setName] = useState('');
	const [creationDescription, setCreationDescription] = useState('');
	const [ingredientAmount, setIngredientAmount] = useState(0);
	const [ingredientId, setIngredientId] = useState(0);

	useEffect(() => {
		setName(props.obj?.name || '');
		setCreationDescription(props.obj?.creationDescription || '');
		setIngredientAmount(props.obj?.ingredientAmount || 0);
		setIngredientId(props.obj?.ingredientId || 0);
	}, [props.obj]);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.postObject({
			id: props.obj?.id || '',
			name,
			creationDescription,
			ingredientAmount,
			ingredientId,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Medicament Creation editor</h1>
			<label htmlFor="name">Name</label>
			<input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

			<label htmlFor="creationDescription">Creation description</label>
			<input
				type="text"
				name="creationDescription"
				id="creationDescription"
				value={creationDescription}
				onChange={(e) => setCreationDescription(e.target.value)}
				required
			/>

			<label htmlFor="ingredientAmount">Ingredient amount</label>
			<input
				type="text"
				name="ingredientAmount"
				id="ingredientAmount"
				value={ingredientAmount}
				onChange={(e) => setIngredientAmount(e.target.value)}
				required
			/>

			<label htmlFor="ingredientId">Ingredient ID</label>
			<input
				type="text"
				name="ingredientId"
				id="ingredientId"
				value={ingredientId}
				onChange={(e) => setIngredientId(e.target.value)}
				required
			/>

			<input type="submit" value="Submit" />
		</form>
	);
};

export default MedicamentCreationForm;
