import { configureStore } from '@reduxjs/toolkit';
import categoriesSlice from './categories/categoriesSlice';
import productsSlice from './products/productsSlice';

import userSlice from './user/userSlice';
import productSlice from './product/productSlice';

export const store = configureStore({
	reducer: {
		categories: categoriesSlice,
		products: productsSlice,
		user: userSlice,
		productPage: productSlice,
	},
	devTools: false,
});
