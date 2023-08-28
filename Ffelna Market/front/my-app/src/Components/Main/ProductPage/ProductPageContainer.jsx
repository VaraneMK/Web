import React, { useEffect } from 'react';
import ProductPage from './ProductPage';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../redux/product/productSlice';
import Spinner from '../../Spinner/Spinner';
import ErrorPage from '../../ErrorPage/ErrorPage';

function ProductPageContainer() {
	const params = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProduct(params.id));
	}, [dispatch, params.id]);

	const { data, isLoading, isError } = useSelector((state) => state.productPage);

	if (!Object.keys(data).length || isLoading) return <Spinner />;

	if (isError) return <ErrorPage />;

	return <ProductPage data={data} />;
}

export default ProductPageContainer;
