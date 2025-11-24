import type { ApiResponse } from "./api";

export interface ReviewsDataType {
	id: number;
	rate: number;
	lecture: string;
	professor: string;
	content: string;
}

export type GetReviewsResponse = ApiResponse<ReviewsDataType[]>;
