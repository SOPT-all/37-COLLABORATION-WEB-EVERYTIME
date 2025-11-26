import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

import { getMarket, getPostsRealtime, getPosts, getReviews } from "@/apis/api";
import { QUERY_KEYS } from "@/constants/queryKey";

export const useGetReviews = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.REVIEWS],
		queryFn: getReviews,
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
