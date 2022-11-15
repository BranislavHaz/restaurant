import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const menuApi = createApi({
  reducerPath: "menuApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/menu/get`,
  }),
  endpoints: (builder) => ({
    getMenuRange: builder.query({
      query: (unix) => `?min=${unix.min}&max=${unix.max}`,
    }),
    getProduct: builder.query({
      query: (product) => `products/search?q=${product}`,
    }),
  }),
});

export const { useGetMenuRangeQuery, useGetProductQuery } = menuApi;
