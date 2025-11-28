import { useSuspenseQuery } from "@tanstack/react-query";

import { getMarket, getPostsRealtime, getPosts, getReviews, getPostsSearch, getPostsHot } from "@/apis/api";
import { QUERY_KEYS } from "@/constants/queryKey";

export const useGetPostsHot = () => {
	return useSuspenseQuery({
		queryKey: [QUERY_KEYS.POSTS_HOT],
		queryFn: getPostsHot,
	});
};

export const useGetReviews = () => {
	return useSuspenseQuery({
		queryKey: [QUERY_KEYS.REVIEWS],
		queryFn: getReviews,
	});
};

export const useGetPostsSearch = (keyword: string, category: string = "ALL", page: number = 1) => {
	return useSuspenseQuery({
		queryKey: [QUERY_KEYS.POSTS_SEARCH, keyword, category, page],
		queryFn: () => getPostsSearch(keyword, category, page),
	});
};

export const useGetPosts = () => {
	return useSuspenseQuery({
		queryKey: [QUERY_KEYS.POSTS],
		queryFn: getPosts,
	});
};

export const useGetMarket = () => {
	return useSuspenseQuery({
		queryKey: [QUERY_KEYS.MARKET],
		queryFn: getMarket,
	});
};

export const useGetPostsRealtime = () => {
	return useSuspenseQuery({
		queryKey: [QUERY_KEYS.POSTS_REALTIME],
		queryFn: getPostsRealtime,
		staleTime: 1000 * 30,
		gcTime: 1000 * 60 * 5,
	});
};
