import { baseApi } from "@/redux/api/baseApi";

export const reviewApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      query: () => ({
        url: "/review",
        method: "GET",
      }),
    }),
    postReview: builder.mutation({
      query: (data) => ({
        url: "/review",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const {useGetAllReviewsQuery, usePostReviewMutation} = reviewApi


