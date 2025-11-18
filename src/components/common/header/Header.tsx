import LogoIcon from "@/assets/images/logo.svg?react";
import { cn } from "@/utils/cn";

const Header = () => {
	return (
		<header
			className={cn(
				"w-full",
				"h-[7rem]",
				"flex items-center justify-center",
				"bg-white",
				"border border-b-[0.5px] border-gray-400",
				"fixed top-0 left-0",
				"z-1",
			)}
		>
			<div className={cn("flex items-center justify-center", "left-4", "gap-[1.2rem]")}>
				<button type="button">
					<LogoIcon width={38} height={32} />
				</button>
				<div className={cn("items-left flex flex-col")}>
					<span className={cn("body02 text-primary-red")}>에브리타임</span>
					<span className={cn("label01 text-primary-black")}>솝트대</span>
				</div>
			</div>
			<h1 className={cn("text-2xl", "font-bold", "text-gray-900")}>App Header</h1>
		</header>
	);
};

export { Header };
