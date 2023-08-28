import React from 'react';
import CartPage from './Cart';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import ErrorPage from '../ErrorPage/ErrorPage';

function CartContainter() {
	const { cart, isError } = useSelector((state) => state.user);

	if (cart.products === undefined) return <Spinner />;
	if (isError) return <ErrorPage />;
	return <CartPage cart={cart} />;
}

export default CartContainter;
