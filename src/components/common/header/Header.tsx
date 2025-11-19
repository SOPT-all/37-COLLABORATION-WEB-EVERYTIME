import { useState } from "react";
import { useNavigate } from "react-router-dom";

import IconChat from "@/assets/icons/icon_chat.svg?react";
import IconUser from "@/assets/icons/icon_user.svg?react";
import LogoIcon from "@/assets/images/logo.svg?react";
import { Lnb } from "@/components/common/header/Lnb";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils/cn";

import { Navbar } from "./Navbar";

const Header = () => {
	const navigate = useNavigate();
	const currentPage = "게시판";
	const [isLnbOpen, setIsLnbOpen] = useState(false);

	const handleLogoClick = () => {
		window.scrollTo(0, 0);
		navigate(ROUTES.HOME);
	};

	const handleBoardHover = () => {
		setIsLnbOpen(true);
	};

	// header 전체 영역에서 마우스가 벗어나면 닫기
	const handleMouseLeave = () => {
		setIsLnbOpen(false);
	};

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
			onMouseLeave={handleMouseLeave}
		>
			{/* 왼쪽 로고 */}
			<div className={cn("flex items-center justify-center", "left-4", "gap-[1.2rem]")}>
				<button type="button" onClick={handleLogoClick}>
					<LogoIcon className={cn("w-[3.8rem]", "h-[3.2rem]")} />
				</button>
				<div className={cn("items-left flex flex-col")}>
					<span className={cn("body02 text-primary-red")}>에브리타임</span>
					<span className={cn("label01 text-primary-black")}>솝트대</span>
				</div>
			</div>

			{/* Navbar */}
			<Navbar currentPage={currentPage} onBoardHover={handleBoardHover} />

			{/* 우측 버튼 그룹 */}
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
			{isLnbOpen && <Lnb isOpen={isLnbOpen} />}
		</header>
	);
};

export { Header };
