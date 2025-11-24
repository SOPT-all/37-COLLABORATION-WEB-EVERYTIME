import type { ApiResponse } from "./api";

export interface PostsHotDataType {
	id: number;
	title: string;
	createdAt: string;
}

export type GetPostsHotResponse = ApiResponse<PostsHotDataType[]>;
