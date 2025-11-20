export interface PaginationProps {
	currentPage: number;
	totalPages: number;
	totalElements?: number;
	pageSize?: number;
	hasPrevious?: boolean;
	hasNext?: boolean;
	onPageChange: (page: number) => void;
}
