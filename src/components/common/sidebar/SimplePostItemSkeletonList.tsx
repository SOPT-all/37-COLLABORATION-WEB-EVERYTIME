import { SimplePostItemSkeleton } from "./SimplePostItemSkeleton";

export const SimplePostItemSkeletonList = () => (
	<div className="flex flex-col">
		{Array.from({ length: 4 }).map((_, idx) => (
			<SimplePostItemSkeleton key={idx} />
		))}
	</div>
);
