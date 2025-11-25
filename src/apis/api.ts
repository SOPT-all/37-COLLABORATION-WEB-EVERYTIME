import { get } from "@/apis/axiosInstance";
import { END_URL } from "@/constants/url";
import type { GetMarketResponse } from "@/types/getMarketResponse";
import type { GetPostsRealTimeResponse } from "@/types/getPostsRealtimeResponse";
import type { GetReviewsResponse } from "@/types/getReviewsResponse";

export const getReviews = () => {
	return get<GetReviewsResponse>(END_URL.GET_REVIEWS);
};

export const getMarket = () => {
	return get<GetMarketResponse>(END_URL.GET_MARKET);
};

export const getPostsRealtime = async () => {
	return await get<GetPostsRealTimeResponse>("/posts/realtime");
};
