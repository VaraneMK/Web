import React, { useEffect } from 'react';
import CatalogPage from './CatalogPage/CatalogPage';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCategoryName, getProducts } from '../../../redux/products/productsSlice';

function CatalogContainer() {
	const params = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProducts(params.id));
		dispatch(getCategoryName(params.id));
	}, [dispatch, params.id]);

	return <CatalogPage />;
}

export default CatalogContainer;
