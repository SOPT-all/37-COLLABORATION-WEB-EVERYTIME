import { cn } from "@/utils/cn";

const ReviewItemSkeleton = () => {
	return (
		<article
			className={cn(
				"flex h-[9.8rem] w-[28rem] flex-col gap-[0.8rem] border border-gray-400 bg-gray-100 px-[0.9rem] py-[0.8rem] [&:first-child]:border-t-0 [&:not(:first-child)]:-mt-[1px]",
			)}
		>
			<div className={cn("skeleton-base", "h-[22px] w-full")} />
			<div className={cn("skeleton-base", "h-[22px] w-[156px]")} />
			<div className={cn("skeleton-base", "h-[22px] w-[226px]")} />
		</article>
	);
};

export default ReviewItemSkeleton;
