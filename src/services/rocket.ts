import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// This variable handles request header informations
const rocketAPIHeader = { "content-type": "application/json" };
// Base URL
const baseUrl = "https://api.spacexdata.com/v3/";
const createRequest = (url) => ({ url, headers: rocketAPIHeader });

export const rocketApi = createApi({
  reducerPath: "rocketApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllRockets: builder.query({
      // Get request to get all capsules (no params)
      query: () => createRequest(`/capsules/`),
    }),
    getInitialRockets: builder.query({
      // Get request to get all capsules (no params)
      query: () => createRequest(`/capsules/?limit=2`),
    }),
    getOneCapsule: builder.query({
      // Get request to get single capsule (with params)
      query: (params) =>
        createRequest(
          `/capsules/${params}`
        ),
    }),
  }),
});

export const { useGetAllRocketsQuery, useGetInitialRocketsQuery, useGetOneCapsuleQuery } = rocketApi
