import type { ChangeEvent, KeyboardEvent } from "react";

import SearchIcon from "@/assets/icons/icon_search.svg?react";
import { cn } from "@/utils/cn";

interface SearchTextFieldProps {
	usage: "main" | "search";
	keyword: string;
	onKeywordChange: (e: ChangeEvent<HTMLInputElement>) => void;
	onSearch: () => void;
}

const SearchTextField = ({ usage, keyword, onKeywordChange, onSearch }: SearchTextFieldProps) => {
	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			if (keyword.length < 2) {
				alert("검색어를 두 글자 이상 입력하세요!");
				return;
			}
			onSearch();
		}
	};

	return (
		<div
			className={cn(
				"flex items-center gap-[0.4rem] border bg-white px-[1.6rem] transition-colors",
				"border border-gray-400 focus-within:border-gray-700",
				usage === "main" && "h-[4rem] w-[78rem]",
				usage === "search" && "h-[4rem] w-[60.2rem]",
			)}
		>
			<SearchIcon className={cn("h-[3.4rem] w-[3.4rem] shrink-0 transition-colors")} />

			<input
				type="text"
				value={keyword}
				onChange={onKeywordChange}
				onKeyDown={handleKeyDown}
				placeholder="전체 게시판의 글을 검색하세요!"
				className={cn("body05 text-primary-black flex-1 placeholder:text-gray-600", "focus:outline-none")}
			/>
		</div>
	);
};

export { SearchTextField };
