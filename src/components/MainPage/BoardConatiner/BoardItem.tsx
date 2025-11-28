import { useMemo } from "react";

import { cn } from "@/utils/cn";
import { formatDateForList } from "@/utils/formatDate";

export interface BoardItemProps {
	content: string;
	createdAt: string;
}

const BoardItem = ({ content, createdAt }: BoardItemProps) => {
	const date = useMemo(() => formatDateForList(createdAt), [createdAt]);

	return (
		<button
			type="button"
			className={cn(
				"flex items-center justify-between",
				"p-[1rem]",
				"bg-white hover:bg-gray-200",
				"h-[3.8rem] w-[38.7rem]",
				"whitespace-nowrap",
				"border-r border-b border-gray-300",
			)}
		>
			<p className={cn("body05 text-gray-700", "w-[28rem] min-w-0 truncate", "text-left")}>{content}</p>
			<p className={cn("caption06 text-gray-500")}>{date}</p>
		</button>
	);
};

export { BoardItem };
