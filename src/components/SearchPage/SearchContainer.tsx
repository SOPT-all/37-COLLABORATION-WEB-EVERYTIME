import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { DelayedSuspense } from "@/components/common/DelayedSuspense";
import { SearchTextField } from "@/components/common/SearchTextField";
import { Filter } from "@/components/SearchPage/Filter";
import { Pagination } from "@/components/SearchPage/Pagination";
import { SearchResultHeader } from "@/components/SearchPage/SearchResultHeader";
import { SearchResultList } from "@/components/SearchPage/SearchResultList/SearchResultList";
import { SearchResultListItemSkeleton } from "@/components/SearchPage/SearchResultList/SearchResultListItemSkeleton";
import { useSearchForm } from "@/hooks/useSearchForm";
import type { PostsSearchDataType } from "@/types/getPostsSearchResponse";
import { categoryKorToEng } from "@/utils/categoryChanger";
import { cn } from "@/utils/cn";

const SearchContainer = () => {
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
	const handleSearch = useCallback(
		(page: number = 1) => {
			const engCategory = categoryKorToEng(category);
			// applied- 값들 업데이트 -> API 재호출
			setAppliedCategory(category);
			setAppliedKeyword(keyword.trim());
			setAppliedPage(page);

			// URL 쿼리 동기화
			setSearchParams({
				category: engCategory,
				keyword,
				page: String(page),
			});
		},
		[category, keyword, setSearchParams],
	);

	const handleDataLoad = useCallback((data: PostsSearchDataType) => {
		setPaginationData(data);
	}, []);

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
			<SearchResultHeader keyword={appliedKeyword} />
			<DelayedSuspense fallback={<SearchResultListItemSkeleton />} delay={200}>
				<SearchResultList
					keyword={appliedKeyword}
					category={appliedCategory}
					page={appliedPage}
					onDataLoad={handleDataLoad}
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

export { SearchContainer };
