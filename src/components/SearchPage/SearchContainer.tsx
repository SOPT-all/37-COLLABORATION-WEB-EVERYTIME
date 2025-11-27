import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { DelayedSuspense } from "@/components/common/DelayedSuspense";
import { Pagination } from "@/components/SearchPage/Pagination";
import { useSearchForm } from "@/hooks/useSearchForm";
import type { PostsSearchDataType } from "@/types/getPostsSearchResponse";
import { categoryKorToEng } from "@/utils/categoryChanger";
import { cn } from "@/utils/cn";

import { Filter } from "./Filter";
import { SearchContentSkeletonList } from "./SearchContentSkeleton";
import { SearchResult } from "./SearchResult";
import { SearchResultList } from "./SearchResultList";
import { SearchTextField } from "./SearchTextField";

export const SearchContainer = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	// 초기값 설정
	const initialCategory = searchParams.get("category") || "ALL";
	const initialKeyword = searchParams.get("keyword") || "";
	const initialPage = Number(searchParams.get("page") || "1");

	const { category, keyword, onCategoryChange, onKeywordChange } = useSearchForm(initialCategory, initialKeyword);

	// 실제로 검색에 사용하는 값
	const [appliedCategory, setAppliedCategory] = useState(initialCategory);
	const [appliedKeyword, setAppliedKeyword] = useState(initialKeyword);
	const [appliedPage, setAppliedPage] = useState(initialPage);

	// 페이지네이션 정보를 저장
	const [paginationData, setPaginationData] = useState<PostsSearchDataType | null>(null);

	// 엔터 또는 페이지네이션 클릭 시에만 호출
	const handleSearch = (page: number = 1) => {
		// applied- 값들 업데이트 -> API 재호출
		setAppliedCategory(category);
		setAppliedKeyword(keyword.trim());
		setAppliedPage(page);

		// URL 쿼리 동기화
		setSearchParams({
			category: categoryKorToEng(category),
			keyword,
			page: String(page),
		});
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [searchParams]);

	return (
		<section className={cn("flex flex-col items-center justify-center", "px-8", "w-full gap-[0.4rem]")}>
			<div className={cn("flex gap-[0.4rem]")}>
				<Filter selectedCategory={category} onSelect={onCategoryChange} />
				<SearchTextField
					usage="search"
					onKeywordChange={onKeywordChange}
					keyword={keyword}
					onSearch={() => handleSearch(1)}
				/>
			</div>
			<SearchResult keyword={appliedKeyword} />
			<DelayedSuspense fallback={<SearchContentSkeletonList />} delay={200}>
				<SearchResultList
					keyword={appliedKeyword}
					category={appliedCategory}
					page={appliedPage}
					onDataLoad={setPaginationData}
				/>
			</DelayedSuspense>

			{paginationData && paginationData.totalSize !== 0 && (
				<Pagination
					currentPage={paginationData.currentPage || 1}
					totalPages={paginationData.totalPages || 1}
					onPageChange={handleSearch}
				/>
			)}
		</section>
	);
};
