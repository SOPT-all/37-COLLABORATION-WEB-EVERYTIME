// src/hooks/usePagination.ts
import { useMemo } from "react";

const BLOCK_SIZE = 10;

interface UsePaginationArgs {
	currentPage: number;
	totalPages: number;

	onPageChange: (page: number) => void;
}

export const usePagination = ({ currentPage, totalPages, onPageChange }: UsePaginationArgs) => {
	/** 현재 블럭 계산 */
	const blockIndex = Math.floor((currentPage - 1) / BLOCK_SIZE);
	const blockStart = blockIndex * BLOCK_SIZE + 1;
	const blockEnd = Math.min(blockStart + BLOCK_SIZE - 1, totalPages);

	/** 이동 가능 여부 */
	const hasPrevious = currentPage > 1;
	const hasNext = currentPage < totalPages;

	const hasPrevBlock = blockStart > 1;
	const hasNextBlock = blockEnd < totalPages;

	/** 페이지 숫자 배열 */
	const pageNumbers = useMemo(
		() => Array.from({ length: blockEnd - blockStart + 1 }, (_, i) => blockStart + i),
		[blockStart, blockEnd],
	);

	const goToPage = (page: number) => {
		if (page < 1 || page > totalPages) return;
		if (page === currentPage) return;

		onPageChange(page);
	};

	const goPrevPage = () => hasPrevious && goToPage(currentPage - 1);
	const goNextPage = () => hasNext && goToPage(currentPage + 1);

	const goPrevBlock = () => {
		if (!hasPrevBlock) return;
		goToPage(Math.max(1, blockStart - BLOCK_SIZE));
	};
	const goNextBlock = () => {
		if (!hasNextBlock) return;
		goToPage(blockStart + BLOCK_SIZE);
	};

	return {
		blockStart,
		blockEnd,
		pageNumbers,
		showDoubleArrows: totalPages > BLOCK_SIZE,

		hasPrevious,
		hasNext,
		hasPrevBlock,
		hasNextBlock,

		goToPage,
		goPrevPage,
		goNextPage,
		goPrevBlock,
		goNextBlock,
	};
};
