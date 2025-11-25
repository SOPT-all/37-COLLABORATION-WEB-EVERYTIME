import { cn } from "@/utils/cn";

const ReviewItemSkeleton = () => {
	return (
		<article
			className={cn(
				"flex h-[9.8rem] w-[28rem] flex-col gap-[0.8rem] border border-gray-400 bg-gray-100 px-[0.9rem] py-[0.8rem] [&:first-child]:border-t-0 [&:not(:first-child)]:-mt-[1px]",
			)}
		>
			<div className={cn("shimmer h-[22px] w-full rounded-[0.4rem]")} />
			<div className={cn("shimmer h-[22px] w-[156px] rounded-[0.4rem]")} />
			<div className={cn("shimmer h-[22px] w-[226px] rounded-[0.4rem]")} />
		</article>
	);
};

export default ReviewItemSkeleton;
