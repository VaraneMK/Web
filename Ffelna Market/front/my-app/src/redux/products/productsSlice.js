import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

export const getProducts = createAsyncThunk('products/getProducts', async (category_id, thunkAPI) => {
	try {
		const res = await axios.get(`${BASE_URL}/product/?category_id=${category_id}`);
		return res.data;
	} catch (err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err);
	}
});

export const getCategoryName = createAsyncThunk('products/getCategoryName', async (category_id, thunkAPI) => {
	try {
		const res = await axios.get(`${BASE_URL}/category/${category_id}`);
		return res.data;
	} catch (err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err);
	}
});

const productsSlice = createSlice({
	name: 'products',
	initialState: {
		list: [],
		isLoading: false,
		isError: false,
		categoryName: '',
	},
	extraReducers: (builder) => {
		builder.addCase(getProducts.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
		});
		builder.addCase(getProducts.fulfilled, (state, action) => {
			state.list = action.payload;
			state.isLoading = false;
			state.isError = false;
		});
		builder.addCase(getProducts.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
		});

		builder.addCase(getCategoryName.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
		});
		builder.addCase(getCategoryName.fulfilled, (state, action) => {
			state.categoryName = action.payload;
			state.isLoading = false;
			state.isError = false;
		});
		builder.addCase(getCategoryName.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
		});
	},
});

export default productsSlice.reducer;
