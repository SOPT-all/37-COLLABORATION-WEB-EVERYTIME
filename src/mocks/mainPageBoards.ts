import type { MainPageBoardsResponse } from "@/types/board";

export const MOCK_MAIN_PAGE_BOARDS: MainPageBoardsResponse = {
	code: 200,
	message: "카테고리 별 상위 4개 게시글 조회 완료",
	data: [
		{
			category: "자유게시판",
			posts: [
				{ id: 1, title: "난 고배하다가 망해서", createdAt: "2025-11-15T15:10:00" },
				{ id: 2, title: "난 괩하다가 망해서", createdAt: "2025-11-15T14:30:00" },
				{ id: 3, title: "오늘 날씨가 정말 좋네요", createdAt: "2025-11-15T13:20:00" },
				{ id: 4, title: "과제가 너무 많아요", createdAt: "2025-11-15T12:15:00" },
			],
		},
		{
			category: "비밀게시판",
			posts: [
				{ id: 5, title: "비밀입니다.", createdAt: "2025-11-15T14:30:00" },
				{ id: 6, title: "이건 비밀이에요", createdAt: "2025-11-15T13:45:00" },
				{ id: 7, title: "말하면 안 되는 이야기", createdAt: "2025-11-15T11:20:00" },
				{ id: 8, title: "비밀 게시글입니다", createdAt: "2025-11-15T10:10:00" },
			],
		},
		{
			category: "졸업생게시판",
			posts: [
				{ id: 9, title: "졸업 후 진로 고민", createdAt: "2025-11-15T16:00:00" },
				{ id: 10, title: "취업 준비 팁 공유", createdAt: "2025-11-15T15:30:00" },
				{ id: 11, title: "대학원 진학 고민", createdAt: "2025-11-15T14:00:00" },
				{ id: 12, title: "졸업생 모임 안내", createdAt: "2025-11-15T13:00:00" },
			],
		},
		{
			category: "새내기게시판",
			posts: [
				{ id: 13, title: "새내기 질문 있어요", createdAt: "2025-11-15T17:00:00" },
				{ id: 14, title: "과목 선택 도와주세요", createdAt: "2025-11-15T16:30:00" },
				{ id: 15, title: "동아리 추천 부탁드려요", createdAt: "2025-11-15T15:45:00" },
				{ id: 16, title: "기숙사 생활 궁금해요", createdAt: "2025-11-15T14:20:00" },
			],
		},
		{
			category: "시사•이슈",
			posts: [
				{ id: 17, title: "최근 시사 이슈에 대한 의견", createdAt: "2025-11-15T18:00:00" },
			],
		},
		{
			category: "정보게시판",
			posts: [
				{ id: 21, title: "유용한 정보 공유합니다", createdAt: "2025-11-15T19:00:00" },
				{ id: 22, title: "시험 정보 알려드려요", createdAt: "2025-11-15T18:30:00" },
				{ id: 23, title: "장학금 정보 공유", createdAt: "2025-11-15T17:45:00" },
				{ id: 24, title: "교환학생 프로그램 안내", createdAt: "2025-11-15T16:20:00" },
			],
		},
		{
			category: "이벤트게시판",
			posts: [
				{ id: 25, title: "축제 이벤트 안내", createdAt: "2025-11-15T20:00:00" },
				{ id: 26, title: "동아리 공연 일정", createdAt: "2025-11-15T19:30:00" },
				{ id: 27, title: "학생회 행사 공지", createdAt: "2025-11-15T18:45:00" },
			],
		},
		{
			category: "취업•진로",
			posts: [
				{ id: 29, title: "취업 면접 후기", createdAt: "2025-11-15T21:00:00" },
				{ id: 30, title: "인턴십 경험 공유", createdAt: "2025-11-15T20:30:00" },
				{ id: 31, title: "자기소개서 작성 팁", createdAt: "2025-11-15T19:45:00" },
				{ id: 32, title: "포트폴리오 준비 방법", createdAt: "2025-11-15T18:20:00" },
			],
		},
		{
			category: "전문직 시험",
			posts: [
				{ id: 33, title: "공무원 시험 준비 후기", createdAt: "2025-11-15T22:00:00" },
				{ id: 34, title: "변호사 시험 정보", createdAt: "2025-11-15T21:30:00" },
				{ id: 35, title: "의사 국가고시 팁", createdAt: "2025-11-15T20:45:00" },
				{ id: 36, title: "회계사 시험 준비", createdAt: "2025-11-15T19:20:00" },
			],
		},
		{
			category: "공무원 준비생들 ✍️",
			posts: [
				{ id: 37, title: "공무원 시험 합격 후기", createdAt: "2025-11-15T23:00:00" },
				{ id: 38, title: "행정직 준비 방법", createdAt: "2025-11-15T22:30:00" },
				{ id: 39, title: "공무원 면접 준비", createdAt: "2025-11-15T21:45:00" },
				{ id: 40, title: "공무원 시험 일정", createdAt: "2025-11-15T20:20:00" },
			],
		},
		{
			category: "로스쿨을 준비하는 아주대생 모임(로아모)",
			posts: [
				{ id: 41, title: "로스쿨 입시 정보", createdAt: "2025-11-16T00:00:00" },
				{ id: 42, title: "LEET 시험 후기", createdAt: "2025-11-15T23:30:00" },
			],
		},
		{
			category: "홍보게시판",
			posts: [
			],
		},
		{
			category: "동아리•학회",
			posts: [
				{ id: 49, title: "동아리 정기 모임 안내", createdAt: "2025-11-16T02:00:00" },
				{ id: 50, title: "학회 발표 일정", createdAt: "2025-11-16T01:30:00" },
				{ id: 51, title: "동아리 신입 모집", createdAt: "2025-11-16T00:45:00" },
				{ id: 52, title: "학회 논문 공유", createdAt: "2025-11-15T23:20:00" },
			],
		},
	],
};
