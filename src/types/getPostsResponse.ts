import type { BaseResponse } from "./api";

export interface PostsPostsType {
	id: number;
	title: string;
	createdAt: string;
}

export interface PostsDataType {
	category: string;
	posts: PostsPostsType[];
}

export type GetPostsResponse = BaseResponse<PostsDataType[]>;
