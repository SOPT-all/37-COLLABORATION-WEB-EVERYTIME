import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { useGetPostsSearch } from "@/apis/queries";
import { Pagination } from "@/components/SearchPage/pagination/Pagination";
import { useSearchForm } from "@/hooks/useSearchForm";
import type { PostsSearchDataType } from "@/types/getPostsSearchResponse";
import { changeLabelToCode } from "@/utils/changeLabelToCode";
import { cn } from "@/utils/cn";

import { Filter } from "./Filter";
import { SearchResultList } from "./SearchResultList";
import { SearchTextField } from "./SearchTextField";

export const SearchContainer = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	// 초기값 설정
	const initialCategory = searchParams.get("category") || "전체";
	const initialKeyword = searchParams.get("keyword") || "";
	const initialPage = Number(searchParams.get("page") || "1");

	const { category, keyword, onCategoryChange, onKeywordChange } = useSearchForm(initialCategory, initialKeyword);

	// 실제로 검색에 사용하는 값
	const [appliedCategory, setAppliedCategory] = useState(initialCategory);
	const [appliedKeyword, setAppliedKeyword] = useState(initialKeyword);
	const [appliedPage, setAppliedPage] = useState(initialPage);

	const { data } = useGetPostsSearch(appliedKeyword, appliedCategory, appliedPage);
	const responseData = data?.data as PostsSearchDataType | undefined;
	console.log("search data:", data?.data);

	// 엔터 또는 페이지네이션 클릭 시에만 호출
	const handleSearch = (page: number = 1) => {
		// applied- 값들 업데이트 -> API 재호출
		setAppliedCategory(category);
		setAppliedKeyword(keyword);
		setAppliedPage(page);

		// 2) URL 쿼리 동기화
		setSearchParams({
			category: changeLabelToCode(category),
			keyword,
			page: String(page),
		});
		console.log("검색 실행:", { category: changeLabelToCode(category), keyword, page });
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [searchParams]);

	return (
		<section className={cn("flex flex-col items-center justify-center", "px-8", "w-full")}>
			<div className={cn("flex gap-[0.4rem]")}>
				<Filter selectedCategory={category} onSelect={onCategoryChange} />
				<SearchTextField
					usage="search"
					onKeywordChange={onKeywordChange}
					keyword={keyword}
					// 엔터 시 page=1부터 검색
					onSearch={() => handleSearch(1)}
				/>
			</div>

			<SearchResultList keyword={appliedKeyword} results={responseData?.posts || []} />

			{responseData?.totalSize !== 0 && (
				<Pagination
					currentPage={responseData?.currentPage || 1}
					totalPages={responseData?.totalPages || 1}
					onPageChange={handleSearch}
				/>
			)}
		</section>
	);
};
