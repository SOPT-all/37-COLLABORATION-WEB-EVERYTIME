import { useState } from "react";
import { useNavigate } from "react-router-dom";

import LogoIcon from "@/assets/images/logo.svg?react";
import { Lnb } from "@/components/common/header/Lnb";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils/cn";

import { Navbar } from "./Navbar";
import { UserButtonGroup } from "./UserButtonGroup";

const Header = () => {
	const navigate = useNavigate();
	const currentPage = "게시판";
	const [isLnbOpen, setIsLnbOpen] = useState(true);

	const handleLogoClick = () => {
		window.scrollTo(0, 0);
		navigate(ROUTES.HOME);
	};

	const handleBoardHover = () => {
		setIsLnbOpen(true);
		console.log("Lnb 열기");
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

			<Navbar currentPage={currentPage} onBoardHover={handleBoardHover} />
			<UserButtonGroup />
			<Lnb isOpen={isLnbOpen} />
		</header>
	);
};

export { Header };
