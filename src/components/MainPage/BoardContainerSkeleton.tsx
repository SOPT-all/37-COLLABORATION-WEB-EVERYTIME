import { cn } from "@/utils/cn";

const BoardContainerSkeleton = () => {
	return (
		<section aria-label="게시판 목록" className="grid grid-cols-2 space-y-4 gap-x-[0.4rem]">
			{Array.from({ length: 13 }).map((_, idx) => (
				<div key={idx}>
					{/* 카테고리 */}
					<div className={cn("h-[4rem] w-[38.8rem]", "bg-white", "border border-gray-300", "p-[1rem]")}>
						<div className={cn("skeleton-base", "h-[1.8rem] w-[15rem]")} />
					</div>
					{/* 게시글 */}
					<div className={cn("h-[15.2rem] w-[38.8rem] bg-gray-100", "border-r border-b border-l border-gray-300")}>
						{Array.from({ length: 4 }).map((_, idx) => (
							<div
								key={idx}
								className={cn("p-[1rem]", "h-[3.8rem] w-[38.7rem]", "border-r border-b border-gray-300 bg-white")}
							>
								<div className={cn("skeleton-base", "h-[1.8rem] w-[36.8rem]")}></div>
							</div>
						))}
					</div>
				</div>
			))}
		</section>
	);
};

export { BoardContainerSkeleton };
