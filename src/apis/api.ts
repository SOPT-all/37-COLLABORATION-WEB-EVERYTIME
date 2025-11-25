import { get } from "@/apis/axiosInstance";
import { END_URL } from "@/constants/url";
import type { GetMarketResponse } from "@/types/getMarketResponse";
import type { GetPostsHotResponse } from "@/types/getPostsHotResponse";
import type { GetReviewsResponse } from "@/types/getReviewsResponse";

export const getPostsHot = () => {
	return get<GetPostsHotResponse>(END_URL.GET_POSTS_HOT);
};

export const getReviews = () => {
	return get<GetReviewsResponse>(END_URL.GET_REVIEWS);
};

export const getMarket = () => {
	return get<GetMarketResponse>(END_URL.GET_MARKET);
};
