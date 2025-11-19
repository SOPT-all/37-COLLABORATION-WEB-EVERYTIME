import type { LivePost } from "@/types/post";

// 실시간 인기 글 목데이터
export const MOCK_LIVE_POST: LivePost = {
	id: 1,
	category: "자유게시판",
	title: "하눌셋넨다하둘셋넷다한둘셋넷다한둘셋넷다한하눌셋넨다하둘셋넷다한둘셋넷다한둘셋넷다한",
	content:
		"하눌셋넨다하둘셋넷다한둘셋넷다한둘셋넷다한하눌셋넨다하둘셋넷다한둘셋넷다한둘셋넷다한하눌셋넨다하둘셋넷다한둘셋넷다한둘셋넷다한",
	likeCount: 25,
	commentCount: 13,
};

// 조건에 맞는 게시글이 없는 경우 테스트용
export const MOCK_EMPTY_LIVE_POST: LivePost | null = null;
