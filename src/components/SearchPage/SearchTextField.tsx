import { useState, type KeyboardEvent, type ChangeEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import SearchIcon from "@/assets/icons/icon_search.svg?react";
import { cn } from "@/utils/cn";

interface SearchTextFieldProps {
	variant: "main" | "search";
	keyword: string;
	onKeywordChange: (newKeyword: string) => void;
}

const SearchTextField = ({ variant, keyword, onKeywordChange }: SearchTextFieldProps) => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const urlKeyword = searchParams.get("keyword") || "";

	const [isFocused, setIsFocused] = useState(false);

	// focus 상태에 따라 표시값 설정
	const displayValue = isFocused ? keyword : urlKeyword;

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		onKeywordChange(e.target.value);
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			const trimmedKeyword = keyword.trim();

			if (trimmedKeyword.length < 2) {
				alert("검색어를 두 글자 이상 입력하세요!");
				return;
			}

			if (trimmedKeyword) {
				const category = searchParams.get("category") || "전체";
				navigate(`/search?category=${category}&keyword=${encodeURIComponent(trimmedKeyword)}&page=1`);
			}
		}
	};

	const handleFocus = () => {
		setIsFocused(true);
		onKeywordChange(urlKeyword);
	};

	const handleBlur = () => {
		setIsFocused(false);
		onKeywordChange("");
	};

	const getInputState = () => {
		if (isFocused && displayValue) return "typing";
		if (isFocused && !displayValue) return "focused";
		if (!isFocused && displayValue) return "filled";
		return "default";
	};

	const inputState = getInputState();

	return (
		<div
			className={cn(
				"flex items-center gap-[0.4rem] border bg-white px-[1.6rem] transition-colors",
				variant === "main" && "h-[4rem] w-[78rem]",
				variant === "search" && "h-[4rem] w-[60.2rem]",

				inputState === "default" && "border-gray-400",
				inputState === "typing" && "border-gray-700",
				inputState === "filled" && "border-gray-400",
				inputState === "focused" && "border-gray-700",
			)}
		>
			<SearchIcon className={cn("h-[3.4rem] w-[3.4rem] shrink-0 transition-colors")} />

			<input
				type="text"
				value={displayValue}
				onChange={handleInputChange}
				onKeyDown={handleKeyDown}
				onFocus={handleFocus}
				onBlur={handleBlur}
				placeholder="전체 게시판의 글을 검색하세요!"
				className={cn("body05 text-primary-black flex-1 placeholder:text-gray-600", "focus:outline-none")}
			/>
		</div>
	);
};

export { SearchTextField };
