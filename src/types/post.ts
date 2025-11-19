export interface LivePost {
	id: number;
	category: string;
	title: string;
	content: string;
	likeCount: number;
	commentCount: number;
}

export interface LivePostApiResponse {
	code: number;
	message: string;
	data: LivePost | null; // 조건에 맞는 게시글이 없으면 null
}
