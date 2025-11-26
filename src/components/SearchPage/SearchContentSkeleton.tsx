import { cn } from "@/utils/cn";

const SearchContentSkeleton = () => {
	const SKELETON_STYLE_CLASS = "shimmer h-[1.8rem] rounded-[4px] bg-gray-200";
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
			<div className={cn(SKELETON_STYLE_CLASS, "w-[6.5rem]")} />
			<div className={cn(SKELETON_STYLE_CLASS, "w-[49.5rem]")} />
			<div className={cn(SKELETON_STYLE_CLASS, "w-[73.2rem]")} />
			<div className={cn(SKELETON_STYLE_CLASS, "w-[11.8rem]")} />
		</div>
	);
};

export { SearchContentSkeleton };
