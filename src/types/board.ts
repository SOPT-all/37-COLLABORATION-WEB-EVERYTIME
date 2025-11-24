export interface Post {
	id: number;
	title: string;
	createdAt: string;
}

export interface BoardData {
	category: string;
	posts: Post[];
}

export interface MainPageBoardsResponse {
	code: number;
	message: string;
	data: BoardData[];
}
