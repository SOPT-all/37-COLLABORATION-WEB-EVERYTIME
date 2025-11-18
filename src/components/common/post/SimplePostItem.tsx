import type { SimplePostItemProps } from "@/types/simplePostItem";
import { cn } from "@/utils/cn";
import { formatDateWithTime } from "@/utils/formatDate";
import { truncateByLength } from "@/utils/truncate";

const SimplePostItem = ({ title, createdAt, onClick }: SimplePostItemProps) => {
	const handleClick = () => {
		if (onClick) onClick();
	};

	// 공백 포함 15번째부터 말줄임표
	const slicedTitle = truncateByLength(title, 14);

	// 날짜 포맷 변환
	const formatDate = formatDateWithTime(createdAt);

	return (
		<button
			onClick={handleClick}
			className={cn(
				"flex items-center",
				"w-fit",
				"py-[0.85rem] pr-[1rem] pl-[1rem]",
				"border border-[var(--color-gray-400)]",
				"bg-[var(--color-gray-100)]",
				"hover:bg-[var(--color-white)]",
				"transition-colors duration-200",
				"cursor-pointer",
			)}
		>
			{/* 제목 */}
			<span className={cn("body05 w-[19.7rem] truncate text-left text-[var(--color-gray-800)]")} title={title}>
				{slicedTitle}
			</span>

			<span className="w-[0.4rem]" />

			{/* 날짜 */}
			<span className="caption04 text-[var(--color-gray-500)]">{formatDate}</span>
		</button>
	);
};

export { SimplePostItem };
