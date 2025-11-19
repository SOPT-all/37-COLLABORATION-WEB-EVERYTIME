import type { LnbSearchProps } from "@/types/lnb";
import { cn } from "@/utils/cn";

const LnbSearch = ({ title, onClick }: LnbSearchProps) => {
	return (
		<button
			onClick={onClick}
			type="button"
			className={cn("flex items-center gap-[0.3rem]", "py-[0.2rem]", "w-fit", "body04 text-primary-red")}
		>
			{title}
		</button>
	);
};

export { LnbSearch };
