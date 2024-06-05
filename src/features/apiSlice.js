import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://66458542b8925626f892194e.mockapi.io/api/v1",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
      providesTags: ["Product"],
    }),
    getSearchProducts: builder.query({
      query: (value) => `products?search=${value}`,
      providesTags: ["Product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => `/products/${id}`,
      invalidatesTags: ["Product"],
    }),
    postProduct: builder.mutation({
      query: (body) => ({
        url: "/products",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useDeleteProductMutation,
  usePostProductMutation,
  useUpdateProductMutation,
  useGetSearchProductsQuery,
} = productsApi;
