import type { SearchResultType } from "@/types/search";
import { cn } from "@/utils/cn";

interface SearchWrapperProps {
	results: SearchResultType[];
}
export const SearchWrapper = ({ results }: SearchWrapperProps) => {
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
				<div className={cn("mt-4 flex flex-col")}>
					{results.map((item) => (
						<div key={item.id} className={cn("h-[13rem] w-[73rem] border border-gray-300")}>
							{JSON.stringify(item)}
						</div>
					))}
				</div>
			)}
		</>
	);
};
