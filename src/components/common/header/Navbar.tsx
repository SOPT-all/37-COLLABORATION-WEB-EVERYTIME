import { GNB_LIST } from "@/constants/gnbList";
import { cn } from "@/utils/cn";

const Navbar = ({ currentPage }: { currentPage: string }) => {
	return (
		<nav className={cn("h-full", "flex", "gap-[2.75rem]", "mr-[23.9rem] ml-[20.8rem]")}>
			{GNB_LIST.map((menu) => (
				<button
					key={menu}
					type="button"
					className={cn(
						"title06 hover:text-primary-red relative h-full text-gray-800",
						currentPage === menu &&
							"after:bg-primary-red text-primary-red after:absolute after:bottom-0 after:left-0 after:h-[6px] after:w-full after:content-['']",
					)}
				>
					{menu}
				</button>
			))}
		</nav>
	);
};

export { Navbar };
