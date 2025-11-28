import { useState, type ChangeEvent } from "react";

export const useSearchForm = (initialCategory: string = "ALL", initialKeyword: string = "") => {
	const [category, setCategory] = useState(initialCategory);
	const [keyword, setKeyword] = useState(initialKeyword);

	const onCategoryChange = (newCategory: string) => {
		setCategory(newCategory);
	};

	const onKeywordChange = (e: ChangeEvent<HTMLInputElement>) => {
		setKeyword(e.target.value);
	};

	return {
		category,
		keyword,
		onCategoryChange,
		onKeywordChange,
		setCategory,
		setKeyword,
	};
};
