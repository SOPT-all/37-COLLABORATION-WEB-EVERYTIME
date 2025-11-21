import { useMemo, useState } from "react";

import { Pagination } from "@/components/SearchPage/pagination/Pagination";
import { SearchWrapper } from "@/components/SearchPage/pagination/SearchWrapper";
import { ALL_MOCK_POSTS, PAGE_SIZE } from "@/mocks/searchMock";
import type { SearchResultType } from "@/types/search";
import { cn } from "@/utils/cn";

export const SearchContainer = () => {
	// TODO: api 연동 시 response로부터 받아옴
	const [currentPage, setCurrentPage] = useState(1);
	const [totalElements] = useState(ALL_MOCK_POSTS.length);
	const [totalPages] = useState(Math.ceil(totalElements / PAGE_SIZE));
	const [hasPrevious, setHasPrevious] = useState(false);
	const [hasNext, setHasNext] = useState(totalPages > 1);

	// TODO: api 연동시 contents로 받아옴(지금은 임의로 slicing해서 구현)
	const currentPageResults: SearchResultType[] = useMemo(() => {
		const start = (currentPage - 1) * PAGE_SIZE;
		const end = start + PAGE_SIZE;
		return ALL_MOCK_POSTS.slice(start, end);
	}, [currentPage]);

	const handlePageChange = (page: number) => {
		// TODO: post api 호출 예정
		if (page === currentPage) return;
		setCurrentPage(page);
		setHasPrevious(page > 1);
		setHasNext(page < totalPages);
	};

	return (
		<section className={cn("flex flex-col items-center justify-center px-8 py-10", "w-full")}>
			<SearchWrapper results={currentPageResults} />
			{totalElements !== 0 && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
					hasPrevious={hasPrevious}
					hasNext={hasNext}
				/>
			)}
		</section>
	);
};
