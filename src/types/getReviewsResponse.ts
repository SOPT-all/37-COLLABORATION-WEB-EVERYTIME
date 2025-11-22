import type { BaseResponse } from "./baseResponse";

export interface ReviewsDataType {
	id: number;
	rate: number;
	lecture: string;
	professor: string;
	content: string;
}

export interface GetReviewsResponse extends BaseResponse {
	data: ReviewsDataType[];
}
