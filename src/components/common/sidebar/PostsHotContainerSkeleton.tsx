import { cn } from "@/utils/cn";

const PostsHotContainerSkeleton = () => {
	const SimplePostItemSkeleton = () => (
		<div
			className={cn(
				"flex items-center",
				"h-[3.6rem] w-[28rem]",
				"px-[1rem] py-[1rem]",
				"border border-gray-400",
				"bg-gray-100",
				"[&:first-child]:border-t-0",
				"[&:not(:first-child)]:-mt-[1px]",
				"animate-pulse",
			)}
		>
			<div className={cn("skeleton-base", "h-[1.8rem] w-full")} />
		</div>
	);

	return (
		<div className="flex flex-col">
			{Array.from({ length: 4 }).map((_, idx) => (
				<SimplePostItemSkeleton key={idx} />
			))}
		</div>
	);
};

export { PostsHotContainerSkeleton };
