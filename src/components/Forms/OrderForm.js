import React, { useState, useEffect } from 'react';

import './form.css';

const OrderForm = (props) => {
	const [recipeId, setRecipeId] = useState(0);
	const [ready, setReady] = useState(false);
	const [allIngredientsAvailable, setAllIngredientsAvailable] = useState(false);
	const [received, setReceived] = useState(false);

	useEffect(() => {
		setRecipeId(props.obj?.recipeId || 0);
		setReady(props.obj?.ready || false);
		setAllIngredientsAvailable(props.obj?.allIngredientsAvailable || false);
		setReceived(props.obj?.received || false);
	}, [props.obj]);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.postObject({
			id: props.obj?.id || '',
			recipeId,
			ready,
			allIngredientsAvailable,
			received,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Order editor</h1>
			<label htmlFor="recipeId">Recipe Id</label>
			<input type="number" name="recipeId" id="recipeId" value={recipeId} onChange={(e) => setRecipeId(e.target.value)} required />

			<label htmlFor="ready">Is ready</label>
			<input type="checkbox" name="ready" id="ready" checked={ready} onChange={(e) => setReady(e.target.checked)} />

			<label htmlFor="allIngredientsAvailable">Is all ingredients available</label>
			<input
				type="checkbox"
				name="allIngredientsAvailable"
				id="allIngredientsAvailable"
				checked={allIngredientsAvailable}
				onChange={(e) => setAllIngredientsAvailable(e.target.checked)}
			/>

			<label htmlFor="received">Is received</label>
			<input type="checkbox" name="received" id="received" checked={received} onChange={(e) => setReceived(e.target.checked)} />

			<input type="submit" value="Submit" />
		</form>
	);
};

export default OrderForm;
