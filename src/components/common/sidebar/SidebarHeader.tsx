import type { SidebarHeaderProps } from "@/types/sidebar";

const SidebarHeader = ({ title, isMore, onClick }: SidebarHeaderProps) => {
	return (
		<header className="flex w-[28rem] border border-gray-400 items-center justify-between bg-gray-100 px-[1rem] py-[1.2rem]">
			<h2 className="title07 text-sub-blue">{title}</h2>
			{isMore && (
				<button
					type="button"
					onClick={onClick}
					aria-label={`${title} 더 보기`}
					className="text-[1.368rem] text-gray-500"
				>
					더 보기
				</button>
			)}
		</header>
	);
};

export default SidebarHeader;
