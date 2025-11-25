import { get } from "@/apis/axiosInstance";
import { END_URL } from "@/constants/url";
import type { GetPostsSearchResponse } from "@/types/getPostsSearchResponse";
import type { GetReviewsResponse } from "@/types/getReviewsResponse";
import { changeLabelToCode } from "@/utils/changeLabelToCode";

export const getReviews = () => {
	return get<GetReviewsResponse>(END_URL.GET_REVIEWS);
};

export const getPostsSearch = (keyword: string, category: string, page: number) => {
	const categoryCode = changeLabelToCode(category);
	return get<GetPostsSearchResponse>(
		`${END_URL.GET_POSTS_SEARCH}?category=${categoryCode}&keyword=${encodeURIComponent(keyword)}&page=${page}`,
	);
};
