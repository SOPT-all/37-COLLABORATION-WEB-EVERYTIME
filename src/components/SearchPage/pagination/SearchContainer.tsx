import { useMemo, useState } from "react";

import { Pagination } from "@/components/SearchPage/pagination/Pagination";
import { SearchWrapper } from "@/components/SearchPage/pagination/SearchWrapper";
import { useSearchForm } from "@/hooks/useSearchForm";
import { ALL_MOCK_POSTS, PAGE_SIZE } from "@/mocks/searchMock";
import type { SearchResultType } from "@/types/search";
import { cn } from "@/utils/cn";

import { Filter } from "../Filter";
import { SearchTextField } from "../SearchTextField";

export const SearchContainer = () => {
	const { category, keyword, onCategoryChange, onKeywordChange } = useSearchForm();
	// TODO: api 연동 시 response로부터 받아오는 값들입니다.
	const [currentPage, setCurrentPage] = useState(1);
	const [totalElements] = useState(ALL_MOCK_POSTS.length);
	const [totalPages] = useState(Math.ceil(totalElements / PAGE_SIZE));
	const [hasPrevious, setHasPrevious] = useState(false);
	const [hasNext, setHasNext] = useState(totalPages > 1);

	// TODO: api 연동시 삭제할 부분
	const currentPageResults: SearchResultType[] = useMemo(() => {
		const start = (currentPage - 1) * PAGE_SIZE;
		const end = start + PAGE_SIZE;
		return ALL_MOCK_POSTS.slice(start, end);
	}, [currentPage]);

	// TODO: api 연동 예정
	const handleSearch = (page: number = 1) => {
		console.log("search url:", `/search?keyword=${keyword}&page=${page}`);
		// TODO: post api 호출하면 사라질 아이들
		setCurrentPage(page);
		setHasPrevious(page > 1);
		setHasNext(page < totalPages);
	};

	return (
		<section className={cn("flex flex-col items-center justify-center", "px-8", "w-full")}>
			<div className={cn("flex gap-[0.4rem]")}>
				<Filter selectedCategory={category} onSelect={onCategoryChange} />
				<SearchTextField usage="search" onKeywordChange={onKeywordChange} keyword={keyword} onSearch={handleSearch} />
			</div>
			<SearchWrapper keyword={keyword} results={currentPageResults} />
			{totalElements !== 0 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handleSearch}
					hasPrevious={hasPrevious}
					hasNext={hasNext}
				/>
			)}
		</section>
	);
};
