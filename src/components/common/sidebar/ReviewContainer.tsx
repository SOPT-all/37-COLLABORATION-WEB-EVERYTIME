import { useGetReviews } from "@/apis/queries";

import { ReviewItem } from "./ReviewItem";

const ReviewContainer = () => {
	const { data } = useGetReviews();
	const reviews = data?.data ?? [];

	return (
		<div className="flex flex-col">
			{reviews.map((review) => (
				<ReviewItem key={review.id} review={review} />
			))}
		</div>
	);
};

export { ReviewContainer };
