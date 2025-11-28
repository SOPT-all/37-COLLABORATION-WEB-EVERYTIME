import { cn } from "@/utils/cn";

interface SearchResultHeaderProps {
	keyword: string;
}

const SearchResultHeader = ({ keyword }: SearchResultHeaderProps) => {
	return (
		<div
			className={cn(
				"flex items-center",
				"min-h-[6rem] w-[78rem]",
				"px-[1.4rem] py-[1.6rem]",
				"border border-[var(--color-gray-400)]",
				"bg-[var(--color-white)]",
			)}
		>
			<h2 className="title01 flex-1 text-[var(--color-primary-black)]">{`'${keyword}' 검색 결과`}</h2>
		</div>
	);
};

export { SearchResultHeader };
