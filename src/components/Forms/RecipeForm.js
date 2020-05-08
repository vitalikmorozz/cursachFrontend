import React, { useState, useEffect } from 'react';

import './form.css';

const RecipeForm = (props) => {
	const [doctorId, setDoctorId] = useState(0);
	const [clientId, setClientId] = useState(0);
	const [diagnosis, setDiagnosis] = useState('');
	const [medicamentId, setMedicamentId] = useState(0);
	const [medicamentAmount, setMedicamentAmount] = useState(0);

	useEffect(() => {
		setDoctorId(props.obj?.doctorId || 0);
		setClientId(props.obj?.clientId || 0);
		setDiagnosis(props.obj?.diagnosis || '');
		setMedicamentId(props.obj?.medicamentId || 0);
		setMedicamentAmount(props.obj?.medicamentAmount || 0);
	}, [props.obj]);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.postObject({
			id: props.obj?.id || '',
			doctorId,
			clientId,
			diagnosis,
			medicamentId,
			medicamentAmount,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Recipe editor</h1>
			<label htmlFor="doctorId">Doctor ID</label>
			<input type="number" name="doctorId" id="doctorId" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} required />

			<label htmlFor="clientId">Client ID</label>
			<input type="number" name="clientId" id="clientId" value={clientId} onChange={(e) => setClientId(e.target.value)} required />

			<label htmlFor="diagnosis">Diagnosis</label>
			<input type="text" name="diagnosis" id="diagnosis" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} required />

			<label htmlFor="medicamentId">Medicament ID</label>
			<input
				type="number"
				name="medicamentId"
				id="medicamentId"
				value={medicamentId}
				onChange={(e) => setMedicamentId(e.target.value)}
				required
			/>

			<label htmlFor="medicamentAmount">Medicament Amount</label>
			<input
				type="number"
				name="medicamentAmount"
				id="medicamentAmount"
				value={medicamentAmount}
				onChange={(e) => setMedicamentAmount(e.target.value)}
				required
			/>

			<input type="submit" value="Submit" />
		</form>
	);
};

export default RecipeForm;
