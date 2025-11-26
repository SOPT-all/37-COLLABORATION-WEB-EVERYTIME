import { ReviewItemSkeleton } from "./ReviewItemSkeleton";

export const ReviewItemSkeletonList = () => (
	<div className="flex flex-col">
		{Array.from({ length: 3 }).map((_, idx) => (
			<ReviewItemSkeleton key={idx} />
		))}
	</div>
);
