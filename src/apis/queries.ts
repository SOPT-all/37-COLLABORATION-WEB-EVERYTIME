import { useQuery } from "@tanstack/react-query";

import { getMarket, getPostsRealtime, getReviews } from "@/apis/api";
import { QUERY_KEYS } from "@/constants/queryKey";

export const useGetReviews = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.REVIEWS],
		queryFn: getReviews,
	});
};

export const useGetMarket = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.MARKET],
		queryFn: getMarket,
	});
};

export const useGetPostsRealtime = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.POSTS_REALTIME],
		queryFn: getPostsRealtime,
		staleTime: 1000 * 60 * 5,
	});
};
