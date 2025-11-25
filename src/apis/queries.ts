import { useQuery } from "@tanstack/react-query";

<<<<<<< HEAD
import { getMarket, getPostsRealtime, getReviews } from "@/apis/api";
=======
import { getMarket, getPostsRealtime, getPosts, getReviews } from "@/apis/api";
>>>>>>> dev
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
<<<<<<< HEAD
		staleTime: 1000 * 60 * 5,
=======
		staleTime: 1000 * 30,
		gcTime: 1000 * 60 * 5,
>>>>>>> dev
	});
};
