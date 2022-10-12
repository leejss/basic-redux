import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<any, void>({
      query: () => ({ url: "/posts" }),
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;

// create cache key and store the data
// cache key  - endpoint + argument
// same endpoint, different cache key -> create each unique cache entry

// Mutation - Skip !

// Refreshing the cached data

// postlist =>
// how to starRT?T
