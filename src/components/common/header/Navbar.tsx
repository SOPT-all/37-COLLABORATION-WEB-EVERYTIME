import { GNB_LIST } from "@/constants/gnbList";
import { cn } from "@/utils/cn";

interface NavbarProps {
	currentPage: string;
	onBoardHover?: () => void;
}
const Navbar = ({ currentPage, onBoardHover }: NavbarProps) => {
	return (
		<nav className={cn("h-full", "flex", "gap-[2.75rem]", "min-w-[48.3rem]")}>
			{GNB_LIST.map((menu) => (
				<button
					key={menu}
					type="button"
					onMouseEnter={menu === "게시판" ? onBoardHover : undefined}
					className={cn(
						"title06 hover:text-primary-red relative h-full w-fit whitespace-nowrap text-gray-800",
						currentPage === menu && [
							"after:h-[0.3rem] after:w-full after:content-['']",
							"after:absolute after:bottom-0 after:left-0",
							"after:bg-primary-red text-primary-red",
						],
					)}
				>
					{menu}
				</button>
			))}
		</nav>
	);
};

export { Navbar };
