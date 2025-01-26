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
        })
    })
})
export const {useGetAllCarsQuery, useGetSingleCarQuery} = carApi;