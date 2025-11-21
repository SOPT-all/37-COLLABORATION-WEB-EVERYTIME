import { cn } from "@/utils/cn";

const LnbSearch = () => {
	return (
		<button
			type="button"
			className={cn("flex items-center gap-[0.3rem]", "py-[0.2rem]", "w-fit", "body04 text-primary-red")}
		>
			게시판 찾기
		</button>
	);
};

export { LnbSearch };
