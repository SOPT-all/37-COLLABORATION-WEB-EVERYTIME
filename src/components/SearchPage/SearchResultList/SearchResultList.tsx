import { useEffect } from "react";

import { useGetPostsSearch } from "@/apis/queries";
import { SearchResultListItem } from "@/components/SearchPage/SearchResultList/SearchResultListItem";
import type { PostsSearchDataType } from "@/types/getPostsSearchResponse";
import { cn } from "@/utils/cn";

interface SearchResultListProps {
	keyword: string;
	category: string;
	page: number;
	onDataLoad: (data: PostsSearchDataType) => void;
}

const SearchResultList = ({ keyword, category, page, onDataLoad }: SearchResultListProps) => {
	const { data } = useGetPostsSearch(keyword, category, page);
	const responseData = data?.data as PostsSearchDataType | undefined;
	const results = responseData?.posts || [];

	useEffect(() => {
		if (responseData && onDataLoad) {
			onDataLoad(responseData);
		}
	}, [responseData, onDataLoad]);

	return (
		<>
			{results.length === 0 ? (
				<p
					role="status"
					className={cn(
						"flex h-[13rem] w-[78rem] items-center justify-center",
						"body05 text-gray-600",
						"border border-gray-400",
					)}
				>
					검색 결과가 없습니다.
				</p>
			) : (
				<div className={cn("flex flex-col", "border-t border-gray-400")}>
					{results.map((item) => (
						<SearchResultListItem key={item.id} searchTerm={keyword} searchResult={item} />
					))}
				</div>
			)}
		</>
	);
};

export { SearchResultList };
