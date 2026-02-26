import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const techniciansApi = createApi({
  reducerPath: "techniciansApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api",
  }),
  tagTypes: ["Technicians"],
  endpoints: (builder) => ({
    getTechnicians: builder.query({
      query: () => "/technicians",
      providesTags: ["Technicians"],
    }),
    getTechnicianById: builder.query({
      query: (id) => `/technicians/${id}`,
      providesTags: (result, error, id) => [{ type: "Technicians", id }],
    }),
    createTechnician: builder.mutation({
      query: (technicianData) => ({
        url: "/technicians",
        method: "POST",
        body: technicianData,
      }),
      invalidatesTags: ["Technicians"],
    }),
    updateTechnician: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/technicians/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Technicians", id },
        "Technicians",
      ],
    }),
    deleteTechnician: builder.mutation({
      query: (id) => ({
        url: `/technicians/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Technicians"],
    }),
    getTechniciansByService: builder.query({
      query: (serviceId) => `/technicians?serviceId=${serviceId}`,
      providesTags: ["Technicians"],
    }),
  }),
});

export const {
  useGetTechniciansQuery,
  useGetTechnicianByIdQuery,
  useCreateTechnicianMutation,
  useUpdateTechnicianMutation,
  useDeleteTechnicianMutation,
  useGetTechniciansByServiceQuery,
} = techniciansApi;
