import type { ApiResponse } from "./api";

export interface PostsRealtimeDataType {
	id: number;
	category: string;
	title: string;
	content: string;
	likeCount: number;
	commentCount: number;
}

export type GetPostsRealTimeResponse = ApiResponse<PostsRealtimeDataType[]>;
