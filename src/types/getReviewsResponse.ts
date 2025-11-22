export interface ReviewsDataType {
	id: number;
	rate: number;
	lecture: string;
	professor: string;
	content: string;
}

export interface GetReviewsResponse {
	code: number;
	message: string;
	data: ReviewsDataType[];
}
