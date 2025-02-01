import { baseApi } from "@/redux/api/baseApi";

export const orderApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllOrders : builder.query({
            query: () => ({
                url: '/order',
                method: 'GET',
            })
        }),
        orderProduct : builder.mutation ({
            query: (data) => ({
                url: '/order',
                method: 'POST',
                body: data
            })
        })
        
    })
})
export const {useOrderProductMutation, useGetAllOrdersQuery } = orderApi;