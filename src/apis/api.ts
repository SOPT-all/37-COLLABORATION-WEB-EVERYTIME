import { get } from "@/apis/axiosInstance";
import { END_URL } from "@/constants/url";
import type { GetMarketResponse } from "@/types/getMarketResponse";
import type { GetPostsRealTimeResponse } from "@/types/getPostsRealtimeResponse";
import type { GetPostsResponse } from "@/types/getPostsResponse";
import type { GetPostsSearchResponse } from "@/types/getPostsSearchResponse";
import type { GetReviewsResponse } from "@/types/getReviewsResponse";
import { changeLabelToCode } from "@/utils/changeLabelToCode";

export const getReviews = () => {
	return get<GetReviewsResponse>(END_URL.GET_REVIEWS);
};

export const getPostsSearch = (keyword: string, category: string, page: number) => {
	const categoryCode = changeLabelToCode(category);
	return get<GetPostsSearchResponse>(
		`${END_URL.GET_POSTS_SEARCH}?category=${categoryCode}&keyword=${encodeURIComponent(keyword)}&page=${page}`,
	);
};

export const getPosts = () => {
	return get<GetPostsResponse>(END_URL.GET_POSTS);
};

export const getMarket = () => {
	return get<GetMarketResponse>(END_URL.GET_MARKET);
};

export const getPostsRealtime = async () => {
	return await get<GetPostsRealTimeResponse>(END_URL.GET_POSTS_REALTIME);
};
