import { baseApi } from "@/redux/api/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
    getSingleUser: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
    // deleteAProduct: builder.mutation({
    //     query: (productId) => ({
    //         url: `/cars/${productId}`,
    //         method: 'DELETE',
    //         body: productId
    //     })
    // }),
    updateAUser: builder.mutation({
        query: ({ id, data }: { id: string; data: any }) => ({
            url: `/users/${id}`,
            method: "PUT",
            body: data
        })
    })
  }),
});
export const { useGetAllUsersQuery, useGetSingleUserQuery, useUpdateAUserMutation } = userApi;
