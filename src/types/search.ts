export interface SearchResultType {
	category: string;
	id: number;
	title: string;
	content: string;
	likeCount: number;
	commentCount: number;
	createdAt: string;
	isAnonymous: boolean;
	nickname: string;
}

export interface SearchResponse {
	code: number;
	message: string;
	data: {
		page: number;
		size: number;
		totalPages: number;
		totalElements: number;
		hasNext: boolean;
		hasPrevious: boolean;
		content: SearchResultType[];
	};
}
