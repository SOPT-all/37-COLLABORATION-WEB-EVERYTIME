import { useState, useCallback, type ChangeEvent } from "react";

export const useSearchForm = (initialCategory: string = "전체", initialKeyword: string = "") => {
	const [category, setCategory] = useState(initialCategory);
	const [keyword, setKeyword] = useState(initialKeyword);

	const onCategoryChange = useCallback((newCategory: string) => {
		setCategory(newCategory);
	}, []);

	const onKeywordChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setKeyword(e.target.value);
	}, []);

	return {
		category,
		keyword,
		onCategoryChange,
		onKeywordChange,
		setCategory,
		setKeyword,
	};
};
