import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../utils/constants';

export const apiSlice = createApi({
	reducerPath: 'api',

	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	tagTypes: ['Product'],
	endpoints: (builder) => ({
		getProduct: builder.query({
			query: ({ product_id }) => `/product/${product_id}`,
			providesTags: ['Product'],
		}),
		getCategoryProducts: builder.query({
			query: ({ category_id }) => `/product/?category_id=${category_id}`,
			providesTags: ['Products'],
		}),
		getCategoryName: builder.query({
			query: ({ category_id }) => `/category/${category_id}`,
			providesTags: ['Category'],
		}),
		getImage: builder.query({
			query: ({ image_id }) => `/image/${image_id}.png`,
			headers: {
				'content-type': 'image/png',
			},
			providesTags: ['Image'],
		}),
	}),
});

export const { useGetProductQuery, useGetCategoryProductsQuery, useGetCategoryNameQuery, useGetImageQuery } = apiSlice;
