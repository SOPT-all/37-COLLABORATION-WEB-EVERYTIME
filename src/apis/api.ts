import { get } from "@/apis/axiosInstance";
import { END_URL } from "@/constants/url";
import type { GetPostsResponse } from "@/types/getPostsResponse";
import type { GetReviewsResponse } from "@/types/getReviewsResponse";

export const getReviews = () => {
	return get<GetReviewsResponse>(END_URL.GET_REVIEWS);
};

export const getPosts = () => {
	return get<GetPostsResponse>(END_URL.GET_POSTS);
};
