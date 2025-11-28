import { get } from "@/apis/axiosInstance";
import { END_URL } from "@/constants/url";
import type { GetMarketResponse } from "@/types/getMarketResponse";
import type { GetPostsHotResponse } from "@/types/getPostsHotResponse";
import type { GetPostsRealTimeResponse } from "@/types/getPostsRealtimeResponse";
import type { GetPostsResponse } from "@/types/getPostsResponse";
import type { GetPostsSearchResponse } from "@/types/getPostsSearchResponse";
import type { GetReviewsResponse } from "@/types/getReviewsResponse";
import { categoryKorToEng } from "@/utils/categoryChanger";

const getPostsHot = () => {
	return get<GetPostsHotResponse>(END_URL.GET_POSTS_HOT);
};

const getReviews = () => {
	return get<GetReviewsResponse>(END_URL.GET_REVIEWS);
};

const getPostsSearch = (keyword: string, category: string, page: number) => {
	const categoryCode = categoryKorToEng(category);
	return get<GetPostsSearchResponse>(
		`${END_URL.GET_POSTS_SEARCH}?category=${categoryCode}&keyword=${encodeURIComponent(keyword)}&page=${page}`,
	);
};

const getPosts = () => {
	return get<GetPostsResponse>(END_URL.GET_POSTS);
};

const getMarket = () => {
	return get<GetMarketResponse>(END_URL.GET_MARKET);
};

const getPostsRealtime = () => {
	return get<GetPostsRealTimeResponse>(END_URL.GET_POSTS_REALTIME);
};

export { getReviews, getPostsSearch, getPosts, getMarket, getPostsRealtime, getPostsHot };
