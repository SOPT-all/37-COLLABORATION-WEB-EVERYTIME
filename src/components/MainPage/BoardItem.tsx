import { cn } from "@/utils/cn";
import { formatDateForList } from "@/utils/formatDate";

export interface ListProps {
	content: string;
	createdAt: string;
}

const BoardItem = ({ content, createdAt }: ListProps) => {
	const date = formatDateForList(createdAt);
	return (
		<button
			type="button"
			className={cn(
				"flex items-center justify-between",
				"p-[1rem]",
				"bg-white hover:bg-[var(--color-gray-200)]",
				"h-[3.8rem] w-[38.8rem]",
				"whitespace-nowrap",
				"border-r border-b border-l border-[var(--color-gray-300)]",
			)}
		>
			<p className={cn("body05 text-gray-700", "w-[28rem] min-w-0 truncate", "text-left")}>{content}</p>
			<p className={cn("caption06 text-gray-500")}>{date}</p>
		</button>
	);
};

export { BoardItem };
