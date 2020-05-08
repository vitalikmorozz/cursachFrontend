import React, { useState, useEffect } from 'react';

import './form.css';

const DoctorForm = (props) => {
	const [name, setName] = useState('');
	const [position, setPosition] = useState('');

	useEffect(() => {
		setName(props.obj?.name || '');
		setPosition(props.obj?.position || '');
	}, [props.obj]);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.postObject({
			id: props.obj?.id || '',
			name,
			position,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Doctor editor</h1>
			<label htmlFor="name">Name</label>
			<input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

			<label htmlFor="position">Position</label>
			<input type="text" name="position" id="position" value={position} onChange={(e) => setPosition(e.target.value)} required />

			<input type="submit" value="Submit" />
		</form>
	);
};

export default DoctorForm;
