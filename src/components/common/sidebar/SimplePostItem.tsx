import type { SimplePostItemProps } from "@/types/simplePostItem";
import { cn } from "@/utils/cn";
import { formatDateWithTime } from "@/utils/formatDate";
import { truncateByLength } from "@/utils/truncate";

const SimplePostItem = ({ title, createdAt, onClick }: SimplePostItemProps) => {
	// 공백 포함 15번째부터 말줄임표
	const slicedTitle = truncateByLength(title, 14);

	// 날짜 포맷 변환
	const formatDate = formatDateWithTime(createdAt);

	return (
		<button
			onClick={onClick}
			className={cn(
				"flex items-center gap-[0.4rem]",
				"w-fit",
				"px-[1rem] py-[0.85rem]",
				"border border-[var(--color-gray-400)]",
				"bg-[var(--color-gray-100)]",
				"hover:bg-[var(--color-white)]",
				"transition-colors duration-200",
			)}
		>
			{/* 제목 */}
			<span className="body05 truncate text-left text-[var(--color-gray-800)]" title={title}>
				{slicedTitle}
			</span>

			{/* 날짜 */}
			<span className="caption04 text-[var(--color-gray-500)]">{formatDate}</span>
		</button>
	);
};

export { SimplePostItem };
