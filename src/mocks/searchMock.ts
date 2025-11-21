import type { SearchResultType } from "@/types/search";
export const PAGE_SIZE = 20; // 한 장에 보여지는 게시글 수

export const ALL_MOCK_POSTS: SearchResultType[] = Array.from({ length: 97 }).map((_, idx) => {
	const id = idx + 1;
	return {
		category: "자유게시판",
		id,
		title: `테스트 게시글 ${id}`,
		content: `테스트 게시글 내용 ${id}`,
		likeCount: (id * 3) % 17,
		commentCount: id % 5,
		createdAt: "2024-06-01T12:00:00Z",
		isAnonymous: id % 2 === 0,
		nickname: id % 2 === 0 ? "익명" : `User${id}`,
	};
});
