import { cn } from "@/utils/cn";

const LivePostItemSkeleton = () => {
	return (
		<div
			className={cn(
				"flex flex-col items-start justify-center gap-[0.3rem]",
				"h-[9.5rem] w-[28rem]",
				"px-[1rem]",
				"border border-gray-400",
				"bg-gray-100",
				"animate-pulse",
			)}
		>
			{/* 제목 스켈레톤 */}
			<div className={cn("shimmer h-[1.8rem] w-[80%] rounded bg-gray-200")} />

			{/* 내용 스켈레톤 (2줄) */}
			<div className={cn("flex w-full flex-col gap-[0.3rem]")}>
				<div className={cn("shimmer h-[1.8rem] w-full rounded bg-gray-200")} />
				<div className={cn("shimmer h-[1.8rem] w-[60%] rounded bg-gray-200")} />
			</div>

			{/* 하단 정보 스켈레톤 */}
			<div className={cn("shimmer h-[1.8rem] w-[45%] rounded bg-gray-200")} />
		</div>
	);
};

export { LivePostItemSkeleton };
