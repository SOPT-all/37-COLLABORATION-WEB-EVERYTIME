import { useQuery } from "@tanstack/react-query";

import { getPostsHot, getReviews } from "@/apis/api";
import { QUERY_KEYS } from "@/constants/queryKey";

export const useGetPostsHot = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.POSTS_HOT],
		queryFn: getPostsHot,
	});
};

export const useGetReviews = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.REVIEWS],
		queryFn: getReviews,
	});
};
