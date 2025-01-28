import { baseApi } from "@/redux/api/baseApi";

export const carApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllCars : builder.query ({
            query: () => ({
                url: '/cars',
                method: 'GET',
            })
        }),
        getSingleCar: builder.query({
            query: (id) => ({
                url: `/cars/${id}`,
                method: 'GET'
            })
        }),
        addProducts: builder.mutation({
            query: (data) => ({
                url: '/cars',
                method: 'POST',
                body: data,
            })
        }),
        deleteAProduct: builder.mutation({
            query: (productId) => ({
                url: `/cars/${productId}`,
                method: 'DELETE',
                body: productId
            })
        }),
        updateAProduct: builder.mutation({
            query: ({ id, data }: { id: string; data: any }) => ({
                url: `/cars/${id}`,
                method: "PUT",
                body: data
            })
        })
    })
})
export const {useGetAllCarsQuery, useGetSingleCarQuery, useAddProductsMutation, useDeleteAProductMutation , useUpdateAProductMutation} = carApi;