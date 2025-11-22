import type { BaseResponse } from "./baseResponse";

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

export interface GetPostsSearchResponse extends BaseResponse {
	data: PostsSearchDataType[];
}

export interface GetPostsSearchErrorResponse {
	status: number;
	code: string;
	msg: string;
}
