// 임시 타입 정의
interface LivePost {
	id: number;
	category: string;
	title: string;
	content: string;
	likeCount: number;
	commentCount: number;
}

// 실시간 인기 글 목데이터
export const MOCK_LIVE_POST: LivePost = {
	id: 1,
	category: "자유게시판",
	title: "오늘 생일",
	content:
		"오늘 생일인데 이렇게라도 축하받고 싶어요 ㅠㅠㅠ 대학교 4학년에 취준 중이라 친구들하고도 잘 못놀고 가족들도 다들 바쁘시고 ㅠㅠ",
	likeCount: 25,
	commentCount: 13,
};

// 조건에 맞는 게시글이 없는 경우 테스트용
export const MOCK_EMPTY_LIVE_POST: LivePost | null = null;
