import { useQuery } from "@tanstack/react-query";

import { getMarket, getReviews } from "@/apis/api";
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
