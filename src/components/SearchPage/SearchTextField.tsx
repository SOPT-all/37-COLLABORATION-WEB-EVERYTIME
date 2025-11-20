import { useState, useMemo, type KeyboardEvent, type ChangeEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import SearchIcon from "@/assets/icons/icon_search.svg?react";
import { cn } from "@/utils/cn";

interface SearchTextFieldProps {
	variant: "main" | "search";
}

const SearchTextField = ({ variant }: SearchTextFieldProps) => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [isFocused, setIsFocused] = useState(false);

	// 초기값 설정
	const initialKeyword = searchParams.get("keyword") || "";
	const [keyword, setKeyword] = useState(initialKeyword);

	// URL 변경 감지 (useMemo)
	useMemo(() => {
		const currentUrlKeyword = searchParams.get("keyword") || "";
		if (currentUrlKeyword !== keyword && !isFocused) {
			setKeyword(currentUrlKeyword);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams]);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setKeyword(e.target.value);
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && keyword.trim()) {
			// 검색 결과 페이지로 이동하면서 keyword 쿼리 파라미터 유지
			const category = searchParams.get("category") || "전체";
			navigate(`/search?category=${category}&keyword=${encodeURIComponent(keyword.trim())}&page=1`); // 페이지 초기화
		}
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	// 4가지 상태 분류
	// Default: placeholder 존재, 포커스 아웃
	// Typing: 입력 중, 포커싱
	// Filled: 입력값 존재, 포커스 아웃
	// Focused: 텍스트필드 선택, 포커싱
	const getInputState = () => {
		if (isFocused && keyword) return "typing";
		if (isFocused && !keyword) return "focused";
		if (!isFocused && keyword) return "filled";
		return "default";
	};

	const inputState = getInputState();

	return (
		<div
			className={cn(
				"flex items-center gap-[0.4rem] border px-[1.6rem] transition-colors",
				variant === "main" && "h-[4rem] w-[78rem]",
				variant === "search" && "h-[4rem] w-[60.2rem]",

				inputState === "default" && "border-gray-400 bg-white",
				inputState === "typing" && "border-gray-700 bg-white",
				inputState === "filled" && "border-gray-400 bg-white",
				inputState === "focused" && "border-gray-700 bg-white",
			)}
		>
			{/* 검색 아이콘 */}
			<SearchIcon className={cn("h-[3.4rem] w-[3.4rem] shrink-0 transition-colors")} />

			{/* 입력 필드 */}
			<input
				type="text"
				value={keyword}
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
