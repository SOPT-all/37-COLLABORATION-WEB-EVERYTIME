import IconArrowLeft from "@/assets/icons/icon_arrow_left.svg?react";
import IconArrowRight from "@/assets/icons/icon_arrow_right.svg?react";
import { cn } from "@/utils/cn";

import IconArrowLeftGray from "@/assets/icons/icon_arrow_left_gray.svg?react";
import IconArrowRightGray from "@/assets/icons/icon_arrow_right_gray.svg?react";
import IconDoubleArrowLeft from "@/assets/icons/icon_double_arrow_left.svg?react";
import IconDoubleArrowLeftGray from "@/assets/icons/icon_double_arrow_left_gray.svg?react";
import IconDoubleArrowRight from "@/assets/icons/icon_double_arrow_right.svg?react";
import IconDoubleArrowRightGray from "@/assets/icons/icon_double_arrow_right_gray.svg?react";

const BLOCK_SIZE = 10;

const iconSizeClass = "h-[1.8rem] w-[1.8rem]";
interface PaginationProps {
	currentPage: number; // 1-based
	totalPages: number;
	onPageChange: (page: number) => void;
	hasPrevious: boolean;
	hasNext: boolean;
}

export const Pagination = ({ currentPage, totalPages, onPageChange, hasPrevious, hasNext }: PaginationProps) => {
	if (totalPages <= 0) return null;

	// 현재 페이지가 속한 블럭 계산
	const blockIndex = Math.floor((currentPage - 1) / BLOCK_SIZE);
	const blockStart = blockIndex * BLOCK_SIZE + 1;
	const blockEnd = Math.min(blockStart + BLOCK_SIZE - 1, totalPages);

	// 쌍꺽쇠를 위한 정보
	const hasPrevBlock = blockStart > 1;
	const hasNextBlock = blockEnd < totalPages;

	const showDoubleArrows = totalPages > BLOCK_SIZE;

	const handleClickPage = (page: number) => {
		if (page === currentPage) return;
		if (page < 1 || page > totalPages) return;
		onPageChange(page);
	};

	const handleClickPrevPage = () => {
		if (!hasPrevious) return;
		handleClickPage(currentPage - 1);
	};

	const handleClickNextPage = () => {
		if (!hasNext) return;
		handleClickPage(currentPage + 1);
	};

	const handleClickPrevBlock = () => {
		if (!hasPrevBlock) return;
		const target = Math.max(1, blockStart - BLOCK_SIZE);
		handleClickPage(target);
	};

	const handleClickNextBlock = () => {
		if (!hasNextBlock) return;
		const target = blockStart + BLOCK_SIZE;
		handleClickPage(target);
	};

	// 페이지 숫자 계산
	const pageNumbers: number[] = [];
	for (let p = blockStart; p <= blockEnd; p += 1) {
		pageNumbers.push(p);
	}

	return (
		<div className="flex w-[55.2rem] items-start justify-center gap-[0.8rem]">
			{/* 왼쪽 쌍꺾쇠 */}
			{showDoubleArrows && (
				<button
					type="button"
					onClick={handleClickPrevBlock}
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
				onClick={handleClickPrevPage}
				disabled={!hasPrevious}
				className={cn("flex h-[3.2rem] w-[3.2rem] items-center justify-center", !hasPrevious && "cursor-default")}
			>
				{hasPrevious ? <IconArrowLeft className={iconSizeClass} /> : <IconArrowLeftGray className={iconSizeClass} />}
			</button>

			{/* 페이지 숫자들 */}
			{pageNumbers.map((page) => {
				return (
					<button
						key={page}
						type="button"
						onClick={() => handleClickPage(page)}
						className={cn("body04 h-[3.2rem] w-[3.2rem]", page === currentPage ? "text-primary-red" : "text-gray-800")}
					>
						{page}
					</button>
				);
			})}

			{/* 오른쪽 단꺾쇠 */}
			<button
				type="button"
				onClick={handleClickNextPage}
				disabled={!hasNext}
				className={cn("flex h-[3.2rem] w-[3.2rem] items-center justify-center", !hasNext && "cursor-default")}
			>
				{hasNext ? <IconArrowRight className={iconSizeClass} /> : <IconArrowRightGray className={iconSizeClass} />}
			</button>

			{/* 오른쪽 쌍꺾쇠 */}
			{showDoubleArrows && (
				<button
					type="button"
					onClick={handleClickNextBlock}
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
