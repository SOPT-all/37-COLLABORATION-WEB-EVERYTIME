import type { ApiResponse } from "./api";

export interface PostsSearchPostsType {
	category: string;
	id: number;
	title: string;
	content: string;
	likeCount: number;
	commentCount: number;
	createdAt: string;
	isAnonymous: boolean;
	nickname: string;
}

export interface PostsSearchDataType {
	currentPage: number;
	totalPages: number;
	size: number;
	currentSize: number;
	totalSize: number;
	hasPrevious: boolean;
	hasNext: boolean;
	posts: PostsSearchPostsType[];
}

export type GetPostsSearchResponse = ApiResponse<PostsSearchDataType[]>;

export interface GetPostsSearchErrorResponse {
	status: number;
	code: string;
	msg: string;
}
