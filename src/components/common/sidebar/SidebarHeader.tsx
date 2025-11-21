import { cn } from "@/utils/cn";
interface SidebarHeaderProps {
	title: string;
	isMore: boolean;
	onClick?: () => void;
}

const SidebarHeader = ({ title, isMore, onClick }: SidebarHeaderProps) => {
	return (
		<header
			className={cn(
				"flex w-[28rem] items-center justify-between",
				"border border-gray-400 bg-gray-100",
				"px-[1rem] py-[1.2rem]",
				"[&:not(:first-child)]:-mt-[1px]",
			)}
		>
			<h2 className="title07 text-sub-blue">{title}</h2>
			{isMore && (
				<button type="button" onClick={onClick} aria-label={`${title} 더 보기`} className="caption03 text-gray-500">
					더 보기
				</button>
			)}
		</header>
	);
};

export { SidebarHeader };
