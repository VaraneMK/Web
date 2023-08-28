import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../utils/constants';

export const getCategories = createAsyncThunk('category/getCategory', async (_, thunkAPI) => {
	try {
		const res = await axios.get(`${BASE_URL}/category`);
		return res.data;
	} catch (err) {
		console.log(err);
		return thunkAPI.rejectWithValue(err);
	}
});

const categoriesSlice = createSlice({
	name: 'category',
	initialState: {
		list: [],
		isLoading: false,
		isError: false,
	},
	extraReducers: (builder) => {
		builder.addCase(getCategories.pending, (state) => {
			state.isLoading = true;
			state.isError = false;
		});
		builder.addCase(getCategories.fulfilled, (state, action) => {
			state.list = action.payload;
			state.isLoading = false;
			state.isError = false;
		});
		builder.addCase(getCategories.rejected, (state) => {
			state.isLoading = false;
			state.isError = true;
		});
	},
});

export default categoriesSlice.reducer;
