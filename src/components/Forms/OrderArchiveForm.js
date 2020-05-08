import React, { useState, useEffect } from 'react';

import './form.css';

const OrderArchiveForm = (props) => {
	const [orderId, setOrderId] = useState(0);
	const [receiveDate, setReceiveDate] = useState('');

	useEffect(() => {
		setOrderId(props.obj?.orderId || 0);
		setReceiveDate(props.obj?.receiveDate || '');
	}, [props.obj]);

	const handleSubmit = (e) => {
		e.preventDefault();
		props.postObject({
			id: props.obj?.id || '',
			orderId,
			receiveDate,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Order Archive editor</h1>
			<label htmlFor="orderId">Order ID</label>
			<input type="number" name="orderId" id="orderId" value={orderId} onChange={(e) => setOrderId(e.target.value)} required />

			<label htmlFor="receiveDate">Receive Date</label>
			<input type="date" name="receiveDate" id="receiveDate" value={receiveDate} onChange={(e) => setReceiveDate(e.target.value)} required />

			<input type="submit" value="Submit" />
		</form>
	);
};

export default OrderArchiveForm;
