import { useQuery } from "@tanstack/react-query";

import { getPostsRealtime, getReviews } from "@/apis/api";
import { QUERY_KEYS } from "@/constants/queryKey";

export const useGetReviews = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.REVIEWS],
		queryFn: getReviews,
	});
};

export const useGetPostsRealtime = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.POSTS_REALTIME],
		queryFn: getPostsRealtime,
		staleTime: 1000 * 60 * 5,
	});
};
