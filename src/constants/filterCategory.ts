export const CATEGORY = {
	ALL: "전체",
	FREE: "자유게시판",
	GRADUATE: "졸업생게시판",
	ISSUE: "시사·이슈",
	EVENT: "이벤트게시판",
	SECRET: "비밀게시판",
	INFO: "정보게시판",
	PROMOTION: "홍보게시판",
} as const;

export type CategoryCode = keyof typeof CATEGORY;
export type CategoryLabel = (typeof CATEGORY)[CategoryCode];

export const LABEL_TO_CODE: Record<CategoryLabel, CategoryCode> = Object.entries(CATEGORY).reduce(
	(acc, [code, label]) => {
		acc[label as CategoryLabel] = code as CategoryCode;
		return acc;
	},
	{} as Record<CategoryLabel, CategoryCode>,
);

interface FilterOptionProps {
	id: number;
	code: CategoryCode;
	label: CategoryLabel;
}

export const FILTER_CATEGORY: FilterOptionProps[] = [
	{ id: 1, code: "ALL", label: CATEGORY.ALL },
	{ id: 2, code: "FREE", label: CATEGORY.FREE },
	{ id: 3, code: "GRADUATE", label: CATEGORY.GRADUATE },
	{ id: 4, code: "ISSUE", label: CATEGORY.ISSUE },
	{ id: 5, code: "EVENT", label: CATEGORY.EVENT },
	{ id: 9, code: "SECRET", label: CATEGORY.SECRET },
	{ id: 11, code: "INFO", label: CATEGORY.INFO },
	{ id: 14, code: "PROMOTION", label: CATEGORY.PROMOTION },
];
