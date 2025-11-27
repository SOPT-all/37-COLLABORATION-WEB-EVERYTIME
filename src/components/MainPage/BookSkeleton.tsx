import { cn } from "@/utils/cn";

const BookSkeleton = () => {
	return (
		<section aria-label="책 목록 로딩 중" className="flex gap-[0.5rem]">
			{Array.from({ length: 5 }).map((_, idx) => (
				<article key={idx} aria-busy="true">
					{/* 책 이미지 스켈레톤 */}
					<figure className={cn("skeleton-base", "h-[19.2rem] w-[15.2rem]")} aria-label="책 이미지 로딩 중" />
					{/* 책 정보 스켈레톤 */}
					<div
						className={cn(
							"flex h-[8rem] w-[15.2rem] flex-col gap-[0.3rem]",
							"border-[0.1rem] border-gray-300",
							"p-[1rem]",
						)}
						aria-label="책 정보 로딩 중"
					>
						<div className={cn("skeleton-base", "h-[1.8rem] w-[13.2rem]")} />
						<div className={cn("skeleton-base", "h-[1.8rem] w-[10.4rem]")} />
						<div className={cn("skeleton-base", "h-[1.6rem] w-[5.6rem]")} />
					</div>
				</article>
			))}
		</section>
	);
};

export { BookSkeleton };
