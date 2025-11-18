import IconChat from "@/assets/icons/icon_chat.svg?react";
import IconUser from "@/assets/icons/icon_user.svg?react";
import LogoIcon from "@/assets/images/logo.svg?react";
import { GNB_LIST } from "@/constants/gnbList";
import { cn } from "@/utils/cn";

const Header = () => {
	const currentPage = "게시판";
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
				"pr-[11.2rem] pl-[11.8rem]",
			)}
		>
			<div className={cn("flex items-center justify-center", "left-4", "gap-[1.2rem]")}>
				<button type="button">
					<LogoIcon className={cn("w-[3.8rem]", "h-[3.2rem]")} />
				</button>
				<div className={cn("items-left flex flex-col")}>
					<span className={cn("body02 text-primary-red")}>에브리타임</span>
					<span className={cn("label01 text-primary-black")}>솝트대</span>
				</div>
			</div>
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
			<div className={cn("flex gap-[0.5rem]")}>
				<button
					className={cn(
						"w-[4.2rem]",
						"h-[4.2rem]",
						"flex items-center justify-center",
						"rounded-[12px] border border-gray-400",
					)}
				>
					<IconChat className={cn("w-[2.7rem]", "h-[2.7rem]")} />
				</button>
				<button
					className={cn(
						"w-[4.2rem]",
						"h-[4.2rem]",
						"flex items-center justify-center",
						"rounded-[12px] border border-gray-400",
					)}
				>
					<IconUser className={cn("w-[2.7rem]", "mr-[1px] h-[2.7rem]")} />
				</button>
			</div>
		</header>
	);
};

export { Header };
