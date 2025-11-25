import { useQuery } from "@tanstack/react-query";

import { getReviews, getPostsSearch } from "@/apis/api";
import { QUERY_KEYS } from "@/constants/queryKey";

export const useGetReviews = () => {
	return useQuery({
		queryKey: [QUERY_KEYS.REVIEWS],
		queryFn: getReviews,
	});
};

export const useGetPostsSearch = (keyword: string, category: string = "전체", page: number = 1) => {
	return useQuery({
		queryKey: [QUERY_KEYS.POSTS_SEARCH],
		queryFn: () => getPostsSearch(keyword, category, page),
	});
};
