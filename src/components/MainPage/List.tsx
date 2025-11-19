import { type ListProps } from "@/types/board";
import { cn } from "@/utils/cn";
import { formatDateForList } from "@/utils/formatDate";

const List = ({ content, createdAt }: ListProps) => {
	const date = formatDateForList(createdAt);
	return (
		<button
			className={cn(
				"flex items-center justify-between",
				"p-[1rem]",
				"bg-white hover:bg-gray-200",
				"h-[3.8rem] w-[38.8rem]",
				"whitespace-nowrap",
				"border-r border-b border-l border-gray-300",
			)}
		>
			<p className={cn("body05 text-gray-700", "w-[28rem] truncate")}>{content}</p>
			<p className={cn("caption06 text-gray-500")}>{date}</p>
		</button>
	);
};

export { List };
