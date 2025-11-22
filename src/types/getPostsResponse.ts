import type { BaseResponse } from "./baseResponse";

export interface PostsPostsType {
	id: number;
	title: string;
	createdAt: string;
}

export interface PostsDataType {
	category: string;
	posts: PostsPostsType[];
}

export interface GetPostsResponse extends BaseResponse {
	data: PostsDataType[];
}
