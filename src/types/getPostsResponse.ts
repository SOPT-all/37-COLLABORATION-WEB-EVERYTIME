import type { ApiResponse } from "@/types/api";

export interface PostsPostsType {
	id: number;
	title: string;
	createdAt: string;
}

export interface PostsDataType {
	category: string;
	posts: PostsPostsType[];
}

export type GetPostsResponse = ApiResponse<PostsDataType[]>;
