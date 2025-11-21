// src/hooks/usePagination.ts
import { useMemo } from "react";

const BLOCK_SIZE = 10;

interface UsePaginationArgs {
	currentPage: number;
	totalPages: number;
	onPageChange: (page: number) => void;
	hasPrevious: boolean;
	hasNext: boolean;
}

export const usePagination = ({ currentPage, totalPages, onPageChange, hasPrevious, hasNext }: UsePaginationArgs) => {
	// 현재 블럭 계산
	const blockIndex = Math.floor((currentPage - 1) / BLOCK_SIZE);
	const blockStart = blockIndex * BLOCK_SIZE + 1;
	const blockEnd = Math.min(blockStart + BLOCK_SIZE - 1, totalPages);

	// 블럭 이동 가능 여부
	const hasPrevBlock = blockStart > 1;
	const hasNextBlock = blockEnd < totalPages;

	// 페이지 숫자 배열
	const pageNumbers = useMemo(() => {
		return Array.from({ length: blockEnd - blockStart + 1 }, (_, i) => blockStart + i);
	}, [blockStart, blockEnd]);

	// 페이지 이동 이벤트
	const goToPage = (page: number) => {
		if (page < 1 || page > totalPages) return;
		if (page === currentPage) return;
		onPageChange(page);
	};

	const goPrevPage = () => {
		if (hasPrevious) goToPage(currentPage - 1);
	};

	const goNextPage = () => {
		if (hasNext) goToPage(currentPage + 1);
	};

	// 블럭 이동 이벤트
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
		hasPrevBlock,
		hasNextBlock,
		goToPage,
		goPrevPage,
		goNextPage,
		goPrevBlock,
		goNextBlock,
		showDoubleArrows: totalPages > BLOCK_SIZE,
	};
};
