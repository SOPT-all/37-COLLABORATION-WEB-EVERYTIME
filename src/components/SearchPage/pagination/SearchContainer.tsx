import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import { Pagination } from "@/components/SearchPage/pagination/Pagination";
import { SearchResultList } from "@/components/SearchPage/SearchResultList";
import { useSearchForm } from "@/hooks/useSearchForm";
import { ALL_MOCK_POSTS, PAGE_SIZE } from "@/mocks/searchMock";
import type { SearchResultType } from "@/types/search";
import { cn } from "@/utils/cn";

import { Filter } from "../Filter";
import { SearchTextField } from "../SearchTextField";

export const SearchContainer = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const navigate = useNavigate();

	const initialCategory = searchParams.get("category") || "전체";
	const initialKeyword = searchParams.get("keyword") || "";

	const { category, keyword, onCategoryChange, onKeywordChange } = useSearchForm(initialCategory, initialKeyword);

	// TODO: api 연동 시 삭제할 부분
	const [currentPage, setCurrentPage] = useState(1);
	const [totalElements] = useState(ALL_MOCK_POSTS.length);
	const [totalPages] = useState(Math.ceil(totalElements / PAGE_SIZE));
	const currentPageResults: SearchResultType[] = useMemo(() => {
		const start = (currentPage - 1) * PAGE_SIZE;
		const end = start + PAGE_SIZE;
		return ALL_MOCK_POSTS.slice(start, end);
	}, [currentPage]);

	const handleSearch = (page: number) => {
		setSearchParams({
			category,
			keyword,
			page: String(page),
		});

		// TODO: api 연동 시 삭제
		setCurrentPage(page);
	};

	useEffect(() => {
		const urlCategory = searchParams.get("category") || "전체";
		const urlKeyword = searchParams.get("keyword") || "";
		const urlPage = Number(searchParams.get("page") || "1");

		// TODO: 검색 api 연동
		console.log("search api url:", `/search?category=${urlCategory}&keyword=${urlKeyword}&page=${urlPage}`);
		navigate(`/search?category=${urlCategory}&keyword=${urlKeyword}&page=${urlPage}`, { replace: true });
		window.scrollTo(0, 0);
	}, [searchParams, navigate]);

	return (
		<section className={cn("flex flex-col items-center justify-center", "px-8", "w-full")}>
			<div className={cn("flex gap-[0.4rem]")}>
				<Filter selectedCategory={category} onSelect={onCategoryChange} />
				<SearchTextField
					usage="search"
					onKeywordChange={onKeywordChange}
					keyword={keyword}
					onSearch={() => handleSearch(1)}
				/>
			</div>
			<SearchResultList keyword={keyword} results={currentPageResults} />
			{totalElements !== 0 && (
				<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handleSearch} />
			)}
		</section>
	);
};
