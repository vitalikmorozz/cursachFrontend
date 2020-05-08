import React, { useState, useEffect } from 'react';
import { withRouter, useParams } from 'react-router-dom';
import axios from 'axios';

import ClientForm from './ClientForm';
import DoctorFrom from './DoctorForm';
import MedicamentForm from './MedicamentForm';
import RecipeForm from './RecipeForm';
import OrderForm from './OrderForm';
import IngredientForm from './IngredientForm';
import OrderArchiveForm from './OrderArchiveForm';
import MedicamentCreationForm from './MedicamentCreationForm';
import MedicamentTypeForm from './MedicamentTypeForm';
import MedicamentUsageForm from './MedicamentUsageForm';

const FromPage = (props) => {
	const { table, id } = useParams();
	const [obj, setObject] = useState(null);
	const baseUrl = 'http://localhost:8080/api/';

	useEffect(() => {
		if (id) {
			axios
				.get(`${baseUrl}${table}/get/${id}`)
				.then((res) => res.data)
				.then((object) => {
					setObject({ ...object });
				});
		}
	}, []);

	const postObject = (obj) => {
		if (obj.id)
			axios.post(`${baseUrl}${table}/edit`, obj).then(() => {
				props.history.push(`/${table}`);
			});
		else
			axios.post(`${baseUrl}${table}/create`, obj).then(() => {
				props.history.push(`/${table}`);
			});
	};

	switch (table) {
		case 'client':
			return <ClientForm postObject={postObject} obj={obj} />;
		case 'doctor':
			return <DoctorFrom postObject={postObject} obj={obj} />;
		case 'medicament':
			return <MedicamentForm postObject={postObject} obj={obj} />;
		case 'recipe':
			return <RecipeForm postObject={postObject} obj={obj} />;
		case 'order':
			return <OrderForm postObject={postObject} obj={obj} />;
		case 'ingredient':
			return <IngredientForm postObject={postObject} obj={obj} />;
		case 'orderArchive':
			return <OrderArchiveForm postObject={postObject} obj={obj} />;
		case 'medicamentCreation':
			return <MedicamentCreationForm postObject={postObject} obj={obj} />;
		case 'medicamentType':
			return <MedicamentTypeForm postObject={postObject} obj={obj} />;
		case 'medicamentUsage':
			return <MedicamentUsageForm postObject={postObject} obj={obj} />;

		default:
			return <div>Page not found</div>;
	}
};

export default withRouter(FromPage);
