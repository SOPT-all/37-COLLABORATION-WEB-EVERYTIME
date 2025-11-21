import type { FilterOptionProps } from "@/components/SearchPage/Filter";

export const CATEGORY = {
	ALL: "전체",
} as const;

export const FILTER_CATEGORY: FilterOptionProps[] = [
	{ id: 0, name: CATEGORY.ALL },
	{ id: 1, name: "자유게시판" },
	{ id: 2, name: "비밀게시판" },
	{ id: 3, name: "졸업생게시판" },
	{ id: 4, name: "시사·이슈" },
	{ id: 5, name: "정보게시판" },
	{ id: 6, name: "이벤트게시판" },
	{ id: 7, name: "홍보게시판" },
];
