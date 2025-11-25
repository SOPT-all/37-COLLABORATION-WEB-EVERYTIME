import { get } from "@/apis/axiosInstance";
import { END_URL } from "@/constants/url";
import type { GetPostsHotResponse } from "@/types/getPostsHotResponse";
import type { GetReviewsResponse } from "@/types/getReviewsResponse";

export const getPostsHot = () => {
	return get<GetPostsHotResponse>(END_URL.GET_POSTS_HOT);
};

export const getReviews = () => {
	return get<GetReviewsResponse>(END_URL.GET_REVIEWS);
};
