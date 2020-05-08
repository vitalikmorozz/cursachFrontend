import React, { useState, useEffect } from 'react';

import './form.css';

const ClientForm = (props) => {
	const [name, setName] = useState('');
	const [age, setAge] = useState(0);
	const [address, setAddress] = useState('');
	const [phone, setPhone] = useState('');

	useEffect(() => {
		setName(props.obj?.name || '');
		setAge(props.obj?.age || 0);
		setAddress(props.obj?.address || '');
		setPhone(props.obj?.phone || '');
	}, [props.obj]);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.postObject({
			id: props.obj?.id || '',
			name,
			age,
			address,
			phone,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Client editor</h1>
			<label htmlFor="name">Name</label>
			<input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

			<label htmlFor="age">Age</label>
			<input type="number" min="0" name="age" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />

			<label htmlFor="address">Address</label>
			<input type="text" name="address" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />

			<label htmlFor="phone">Phone</label>
			<input type="tel" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

			<input type="submit" value="Submit" />
		</form>
	);
};

export default ClientForm;
