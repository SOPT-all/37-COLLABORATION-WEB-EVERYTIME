import LogoIcon from "@/assets/images/mark.svg?react";
import { cn } from "@/utils/cn";

const Header = () => {
	return (
		<header
			className={cn(
				"w-full",
				"h-[7rem]",
				"flex items-center justify-center",
				"bg-white",
				"shadow-md",
				"fixed top-0 left-0",
				"z-50",
			)}
		>
			<LogoIcon />
			<h1 className={cn("text-2xl", "font-bold", "text-gray-900")}>App Header</h1>
		</header>
	);
};

export { Header };
