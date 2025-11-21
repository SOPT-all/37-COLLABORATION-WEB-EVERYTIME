import IconArrowLeft from "@/assets/icons/icon_arrow_left.svg?react";
import IconArrowLeftGray from "@/assets/icons/icon_arrow_left_gray.svg?react";
import IconArrowRight from "@/assets/icons/icon_arrow_right.svg?react";
import IconArrowRightGray from "@/assets/icons/icon_arrow_right_gray.svg?react";
import IconDoubleArrowLeft from "@/assets/icons/icon_double_arrow_left.svg?react";
import IconDoubleArrowLeftGray from "@/assets/icons/icon_double_arrow_left_gray.svg?react";
import IconDoubleArrowRight from "@/assets/icons/icon_double_arrow_right.svg?react";
import IconDoubleArrowRightGray from "@/assets/icons/icon_double_arrow_right_gray.svg?react";
import { usePagination } from "@/hooks/usePagination";
import { cn } from "@/utils/cn";

interface PaginationProps {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	hasPrevious: boolean;
	hasNext: boolean;
}

const iconSizeClass = "h-[1.8rem] w-[1.8rem]";

export const Pagination = ({ currentPage, totalPages, onPageChange, hasPrevious, hasNext }: PaginationProps) => {
	const {
		pageNumbers,
		hasPrevBlock,
		hasNextBlock,
		goPrevBlock,
		goNextBlock,
		goPrevPage,
		goNextPage,
		goToPage,
		showDoubleArrows,
	} = usePagination({ currentPage, totalPages, onPageChange, hasPrevious, hasNext });

	if (totalPages <= 0) return null;

	return (
		<div className={cn("flex items-start justify-center", "w-[55.2rem] gap-[0.8rem]")}>
			{/* 왼쪽 쌍꺾쇠 */}
			{showDoubleArrows && (
				<button
					type="button"
					onClick={goPrevBlock}
					disabled={!hasPrevBlock}
					className={cn("flex h-[3.2rem] w-[3.2rem] items-center justify-center", !hasPrevBlock && "cursor-default")}
				>
					{hasPrevBlock ? (
						<IconDoubleArrowLeft className={iconSizeClass} />
					) : (
						<IconDoubleArrowLeftGray className={iconSizeClass} />
					)}
				</button>
			)}

			{/* 왼쪽 단꺾쇠 */}
			<button
				type="button"
				onClick={goPrevPage}
				disabled={!hasPrevious}
				className={cn("flex h-[3.2rem] w-[3.2rem] items-center justify-center", !hasPrevious && "cursor-default")}
			>
				{hasPrevious ? <IconArrowLeft className={iconSizeClass} /> : <IconArrowLeftGray className={iconSizeClass} />}
			</button>

			{/* 페이지 숫자 */}
			{pageNumbers.map((page) => {
				return (
					<button
						key={page}
						type="button"
						onClick={() => goToPage(page)}
						className={cn("body04 h-[3.2rem] w-[3.2rem]", page === currentPage ? "text-primary-red" : "text-gray-800")}
					>
						{page}
					</button>
				);
			})}

			{/* 오른쪽 단꺾쇠 */}
			<button
				type="button"
				onClick={goNextPage}
				disabled={!hasNext}
				className={cn("flex h-[3.2rem] w-[3.2rem] items-center justify-center", !hasNext && "cursor-default")}
			>
				{hasNext ? <IconArrowRight className={iconSizeClass} /> : <IconArrowRightGray className={iconSizeClass} />}
			</button>

			{/* 오른쪽 쌍꺾쇠 */}
			{showDoubleArrows && (
				<button
					type="button"
					onClick={goNextBlock}
					disabled={!hasNextBlock}
					className={cn("flex h-[3.2rem] w-[3.2rem] items-center justify-center", !hasNextBlock && "cursor-default")}
				>
					{hasNextBlock ? (
						<IconDoubleArrowRight className={iconSizeClass} />
					) : (
						<IconDoubleArrowRightGray className={iconSizeClass} />
					)}
				</button>
			)}
		</div>
	);
};
