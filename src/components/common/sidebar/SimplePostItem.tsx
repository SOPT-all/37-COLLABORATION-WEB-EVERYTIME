import { cn } from "@/utils/cn";
import { formatDateWithTime } from "@/utils/formatDate";

interface SimplePostItemProps {
	title: string;
	createdAt: string;
	onClick?: () => void;
}

const SimplePostItem = ({ title, createdAt, onClick }: SimplePostItemProps) => {
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
			<span className={cn("body05 truncate text-left text-gray-800", "w-[19.7rem]")} title={title}>
				{title}
			</span>
			<span className={cn("caption04 ml-auto shrink-0 text-right text-gray-500")}>{formatDate}</span>{" "}
		</button>
	);
};

export { SimplePostItem };
