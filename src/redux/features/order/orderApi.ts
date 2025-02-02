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
        }),
        verifyPayment : builder.query({
            query: (order_id) => ({
                url: "/order/verify",
                params: {order_id},
                method: 'GET',
            })
        })
        
    })
})
export const {useOrderProductMutation, useGetAllOrdersQuery, useVerifyPaymentQuery } = orderApi;