import type { SearchResultType } from "@/types/search";
import { cn } from "@/utils/cn";

import { SearchContent } from "../SearchContent";
interface SearchWrapperProps {
	keyword: string;
	results: SearchResultType[];
}
export const SearchWrapper = ({ keyword, results }: SearchWrapperProps) => {
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
				<div className={cn("mt-[0.4rem] flex flex-col", "border-t border-gray-400")}>
					{results.map((item) => (
						<SearchContent key={item.id} searchTerm={keyword} searchResult={item} />
					))}
				</div>
			)}
		</>
	);
};
