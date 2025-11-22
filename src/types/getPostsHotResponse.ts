import type { BaseResponse } from "./baseResponse";

export interface PostsHotDataType {
	id: number;
	title: string;
	createdAt: string;
}

export interface GetPostsHotResponse extends BaseResponse {
	data: PostsHotDataType[];
}
