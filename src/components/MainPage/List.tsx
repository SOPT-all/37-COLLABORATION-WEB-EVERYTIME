import { cn } from "@/utils/cn";
import { formatDateForList } from "@/utils/formatDate";
interface ListProps {
	content: string;
	createdAt: string;
}

const List = ({ content, createdAt }: ListProps) => {
	const date = formatDateForList(createdAt);
	return (
		<div
			className={cn(
				"flex items-center justify-between",
				"p-[1rem]",
				"bg-white hover:bg-gray-200",
				"h-[3.8rem] w-[38.8rem]",
				"whitespace-nowrap",
				"border border-gray-300",
			)}
		>
			<p className={cn("body05 text-gray-700", "w-[28rem] truncate")}>{content}</p>
			<p className={cn("caption06 text-gray-500")}>{date}</p>
		</div>
	);
};

export { List };
