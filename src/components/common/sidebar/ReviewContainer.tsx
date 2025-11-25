import { useGetReviews } from "@/apis/queries";

import { ReviewItem } from "./ReviewItem";
import ReviewItemSkeleton from "./ReviewItemSkeleton";

const ReviewContainer = () => {
	const { data, isLoading, isError } = useGetReviews();

	const reviews = data?.data ?? [];

	if (isLoading) {
		return (
			<div className="flex flex-col">
				<ReviewItemSkeleton />
				<ReviewItemSkeleton />
				<ReviewItemSkeleton />
			</div>
		);
	}

	if (isError) {
		return <p className="text-[1.2rem] text-red-500">강의평을 불러오지 못했습니다.</p>;
	}

	return (
		<div className="flex flex-col">
			{reviews.map((review) => (
				<ReviewItem key={review.id} review={review} />
			))}
		</div>
	);
};

export { ReviewContainer };
