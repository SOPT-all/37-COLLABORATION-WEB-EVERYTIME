import StarActive from "@/assets/icons/icon_star_active.svg?react";
import StarInactive from "@/assets/icons/icon_star_inactive.svg?react";
import { cn } from "@/utils/cn";

interface ReviewItemProps {
	rate: number;
	lectureTitle: string;
	professorName: string;
	reviewContent: string;
}

const MAX_STARS = 5;

const ReviewItem = ({ rate, lectureTitle, professorName, reviewContent }: ReviewItemProps) => {
	const activeStars = Math.floor(rate);
	const inactiveStars = MAX_STARS - activeStars;

	return (
		<button
			type="button"
			className={cn(
				"flex h-[9.8rem] w-[28rem] flex-col gap-[0.8rem] text-left",
				"border border-gray-400 bg-gray-100",
				"hover:bg-white",
				"px-[0.9rem] py-[0.8rem]",
				"[&:not(:first-child)]:-mt-[1px]",
			)}
		>
			<div className={cn("flex items-center gap-[0.2rem]")} aria-label={`별점 ${rate}점 만점에 ${rate}점`}>
				{Array.from({ length: activeStars }, (_, idx) => (
					<StarActive key={`star-active-${idx}`} width={10} height={10} aria-hidden="true" />
				))}
				{Array.from({ length: inactiveStars }, (_, idx) => (
					<StarInactive key={`star-inactive-${idx}`} width={10} height={10} aria-hidden="true" />
				))}
			</div>
			<p className={cn("title07 text-gray-800")}>
				{lectureTitle}: {professorName}
			</p>
			<p className={cn("body07 h-[3.12rem] w-[26.2rem] overflow-hidden text-gray-600")}>{reviewContent}</p>
		</button>
	);
};

export { ReviewItem };
