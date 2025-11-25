import { cn } from "@/utils/cn";

const SimplePostItemSkeleton = () => {
	return (
		<div
			className={cn(
				"flex items-center",
				"h-[3.6rem] w-[28rem]",
				"px-[1rem] py-[1rem]",
				"border border-gray-400",
				"bg-gray-100",
				"[&:first-child]:border-t-0",
				"[&:not(:first-child)]:-mt-[1px]",
			)}
		>
			<div className={cn("shimmer h-[1.8rem] w-full rounded-[0.4rem] bg-gray-200")} />
		</div>
	);
};

export default SimplePostItemSkeleton;
