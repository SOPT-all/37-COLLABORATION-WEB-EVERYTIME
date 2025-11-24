import type { BaseResponse } from "./api";

export interface ReviewsDataType {
	id: number;
	rate: number;
	lecture: string;
	professor: string;
	content: string;
}

export type GetReviewsResponse = BaseResponse<ReviewsDataType[]>;
