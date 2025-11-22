import type { BaseResponse } from "./baseResponse";

export interface PostsRealtimeDataType {
	id: number;
	category: string;
	title: string;
	content: string;
	likeCount: number;
	commentCount: number;
}

export interface GetPostsRealTimeResponse extends BaseResponse {
	data: PostsRealtimeDataType[];
}
