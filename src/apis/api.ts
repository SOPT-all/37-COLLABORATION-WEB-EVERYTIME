import { get } from "@/apis/axiosInstance";
import { END_URL } from "@/constants/url";
import type { ReviewsResponseTypes } from "@/types/reviewsResponseType";

export const getReviews = () => {
	return get<ReviewsResponseTypes>(END_URL.GET_REVIEWS);
};
