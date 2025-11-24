import type { BaseResponse } from "./api";

export interface PostsHotDataType {
	id: number;
	title: string;
	createdAt: string;
}

export type GetPostsHotResponse = BaseResponse<PostsHotDataType[]>;
