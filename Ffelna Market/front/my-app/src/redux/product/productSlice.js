import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

export const getProduct = createAsyncThunk('product/getProduct', async (id, thunkAPI) => {
	try {
		const res = await axios.get(`${BASE_URL}/product/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err);
	}
});

const productSlice = createSlice({
	name: 'product',
	initialState: {
		data: {},
		isLoading: false,
		isError: false,
	},
	extraReducers: (builder) => {
		builder.addCase(getProduct.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
		});
		builder.addCase(getProduct.fulfilled, (state, action) => {
			state.data = action.payload;
			state.isLoading = false;
			state.isError = false;
		});
		builder.addCase(getProduct.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
		});
	},
});

export default productSlice.reducer;
