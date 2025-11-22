export interface ReviewItem {
	id: number;
	rate: number;
	lecture: string;
	professor: string;
	content: string;
}

export type ReviewsResponseTypes = ReviewItem[];
