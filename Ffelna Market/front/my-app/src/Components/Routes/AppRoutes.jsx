import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultPage from './../Main/DefaultPage/DefaultPage';
import CatalogContainer from './../Main/CatalogContainer/CatalogContainer';

import Catalog from '../Main/DefaultPage/Catalog/Catalog';
import ProductPageContainer from '../Main/ProductPage/ProductPageContainer';
import CartContainter from '../Cart/CartContainter';

function AppRoutes() {
	return (
		<Routes>
			<Route
				path="/"
				element={<DefaultPage />}
			/>
			<Route
				path="/category"
				element={<Catalog />}
			/>
			<Route
				path="/product/:id"
				element={<ProductPageContainer />}
			/>
			<Route
				path="/category/:id"
				element={<CatalogContainer />}
			/>
			<Route
				path="/cart"
				element={<CartContainter />}
			/>
		</Routes>
	);
}

export default AppRoutes;
