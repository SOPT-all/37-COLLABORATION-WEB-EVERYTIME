import type { SimplePostItemProps } from "@/types/simplePostItem";
import { cn } from "@/utils/cn";
import { formatDateWithTime } from "@/utils/formatDate";
import { truncateByLength } from "@/utils/truncate";

const SimplePostItem = ({ title, createdAt, onClick }: SimplePostItemProps) => {
	const slicedTitle = truncateByLength(title, 14);
	const formatDate = formatDateWithTime(createdAt);

	return (
		<button
			onClick={onClick}
			className={cn(
				"flex items-center gap-[0.4rem]",
				"w-[28rem]",
				"px-[1rem] py-[0.85rem]",
				"border border-gray-400",
				"bg-gray-100",
				"hover:bg-white",
				"transition-colors duration-200",
				"[&:not(:first-child)]:-mt-[1px]",
			)}
		>
			<span className={cn("body05 truncate text-left text-gray-800", "flex-1")} title={title}>
				{slicedTitle}
			</span>

			<span className="caption04 shrink-0 text-gray-500">{formatDate}</span>
		</button>
	);
};

export { SimplePostItem };
