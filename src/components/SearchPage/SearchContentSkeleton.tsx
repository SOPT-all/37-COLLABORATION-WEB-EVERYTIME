import { cn } from "@/utils/cn";

const SearchContentSkeletonList = ({ count = 6 }: { count?: number }) => {
	const SearchContentSkeletonItem = () => {
		const skeletonBars = [
			{ width: "w-[6.5rem]" },
			{ width: "w-[49.5rem]" },
			{ width: "w-[73.2rem]" },
			{ width: "w-[11.8rem]" },
		];

		return (
			<div
				aria-hidden="true"
				className={cn(
					"px-[2.4rem] py-[1.6rem]",
					"bg-white",
					"border-r border-b border-l border-gray-400",
					"h-[13rem] w-[78rem]",
					"flex flex-col gap-[0.6rem]",
					"hover:bg-gray-100",
				)}
			>
				<span className="sr-only">게시글 목록을 불러오는 중입니다.</span>
				{skeletonBars.map((bar, index) => (
					<div key={index} className={cn("skeleton-base", "h-[1.8rem]", bar.width)} />
				))}
			</div>
		);
	};

	return (
		<div className={cn("flex flex-col", "body05 text-gray-600", "border-t border-gray-400")}>
			{Array.from({ length: count }, (_, index) => (
				<SearchContentSkeletonItem key={index} />
			))}
		</div>
	);
};

export { SearchContentSkeletonList };
