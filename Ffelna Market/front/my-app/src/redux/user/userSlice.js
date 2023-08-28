import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

export const getCart = createAsyncThunk('cart/getCart', async (_, thunkAPI) => {
	try {
		const res = await axios.get(`${BASE_URL}/bucket/`, { withCredentials: true });
		return res.data;
	} catch (err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err);
	}
});

export const cleanCart = createAsyncThunk('cart/cleanCart', async (_, thunkAPI) => {
	try {
		const res = await axios.post(`${BASE_URL}/bucket/clean`, {}, { withCredentials: true });
		return res.data;
	} catch (err) {
		return thunkAPI.rejectWithValue(err);
	}
});

export const addItem = createAsyncThunk('cart/addItem', async (id, thunkAPI) => {
	try {
		const res = await axios.post(
			`${BASE_URL}/bucket/add`,
			{
				spec_id: id,
			},
			{
				withCredentials: true,
			},
		);

		return res.data;
	} catch (err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err);
	}
});

export const deleteItem = createAsyncThunk('cart/deleteItem', async (id, thunkAPI) => {
	try {
		const res = await axios.post(
			`${BASE_URL}/bucket/delete`,
			{
				spec_id: id,
			},
			{
				withCredentials: true,
			},
		);
		return res.data;
	} catch (err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err);
	}
});

export const deleteProductFromCart = createAsyncThunk('cart/deleteProduct', async (id, thunkAPI) => {
	try {
		const res = await axios.post(
			`${BASE_URL}/bucket/delete_product`,
			{
				spec_id: id,
			},
			{
				withCredentials: true,
			},
		);
		return res.data;
	} catch (err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err);
	}
});

export const createOrder = createAsyncThunk('cart/createOrder', async (number, thunkAPI) => {
	try {
		const res = await axios.post(
			`${BASE_URL}/order/`,
			{
				phone_number: number,
			},
			{
				withCredentials: true,
			},
		);
		return res.data;
	} catch (err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err);
	}
});

const userSlice = createSlice({
	name: 'user',
	initialState: {
		cart: [],
		isLoading: false,
		isError: false,
	},
	extraReducers: (builder) => {
		builder.addCase(getCart.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
		});
		builder.addCase(getCart.fulfilled, (state, action) => {
			state.cart = action.payload;
			state.isLoading = false;
			state.isError = false;
		});
		builder.addCase(getCart.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
		});

		builder.addCase(addItem.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
		});
		builder.addCase(addItem.fulfilled, (state, action) => {
			state.cart = action.payload;
			state.isLoading = false;
			state.isError = false;
		});
		builder.addCase(addItem.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
		});

		builder.addCase(deleteItem.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
		});
		builder.addCase(deleteItem.fulfilled, (state, action) => {
			state.cart = action.payload;
			state.isLoading = false;
			state.isError = false;
		});
		builder.addCase(deleteItem.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
		});

		builder.addCase(cleanCart.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
		});
		builder.addCase(cleanCart.fulfilled, (state, action) => {
			state.cart = action.payload;
			state.isLoading = false;
			state.isError = false;
		});
		builder.addCase(cleanCart.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
		});

		builder.addCase(deleteProductFromCart.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
		});
		builder.addCase(deleteProductFromCart.fulfilled, (state, action) => {
			state.cart = action.payload;
			state.isLoading = false;
			state.isError = false;
		});
		builder.addCase(deleteProductFromCart.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
		});

		builder.addCase(createOrder.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
		});
		builder.addCase(createOrder.fulfilled, (state, action) => {
			state.cart = { ...action.payload, products: [] };
			state.isLoading = false;
			state.isError = false;
		});
		builder.addCase(createOrder.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
		});
	},
});

export default userSlice.reducer;
