import type { LnbItemProps } from "@/types/lnb";
import { cn } from "@/utils/cn";

const LnbItem = ({ title, hasBadge = false, onClick }: LnbItemProps) => {
	return (
		<button
			onClick={onClick}
			className={cn(
				"flex items-center gap-[0.3rem]",
				"py-[0.2rem] pr-[5.8rem]",
				"w-fit",
				"body06 text-gray-800",
				"hover:text-primary-red",
				"transition-colors duration-200",
				"cursor-pointer",
			)}
		>
			<span>{title}</span>
			{hasBadge && <span className={cn("h-[0.4rem] w-[0.4rem]", "bg-sub-green rounded-full")} />}
		</button>
	);
};

export { LnbItem };
