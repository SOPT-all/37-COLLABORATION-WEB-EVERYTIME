import type { ApiResponse } from "@/types/api";

export interface PostsRealTimeDataType {
	id: number;
	category: string;
	title: string;
	content: string;
	likeCount: number;
	commentCount: number;
}

export type GetPostsRealTimeResponse = ApiResponse<PostsRealTimeDataType | null>;
