import { useQuery } from "@tanstack/react-query";

import { getPosts, getReviews } from "@/apis/api";
import { QUERY_KEYS } from "@/constants/queryKey";

export const useGetReviews = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.REVIEWS],
		queryFn: getReviews,
	});
};

export const useGetPosts = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.POSTS],
		queryFn: getPosts,
	});
};
