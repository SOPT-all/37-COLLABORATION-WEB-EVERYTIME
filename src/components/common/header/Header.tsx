import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import LogoIcon from "@/assets/images/logo.svg?react";
import { Lnb } from "@/components/common/header/Lnb";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils/cn";

import { Navbar } from "./Navbar";
import { UserButtonGroup } from "./UserButtonGroup";

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const currentPage = "게시판";
	const [isLnbOpen, setIsLnbOpen] = useState(false);

	// 메인 or 검색 결과 페이지에서만 LNB 활성
	const isBoardEnabled = location.pathname === ROUTES.HOME || location.pathname.startsWith(ROUTES.SEARCH); // 예: "/search"

	const handleLogoClick = () => {
		window.scrollTo(0, 0);
		navigate(ROUTES.HOME);
	};

	const handleBoardHover = () => {
		if (!isBoardEnabled) return;
		if (!isLnbOpen) {
			setIsLnbOpen(true);
		}
	};

	const handleMouseLeave = () => {
		if (!isBoardEnabled) return;
		if (isLnbOpen) {
			setIsLnbOpen(false);
		}
	};

	return (
		<header
			className={cn(
				"w-full",
				"h-[7rem]",
				"flex items-center justify-between",
				"bg-white",
				"border border-b-[0.5px] border-gray-400",
				"fixed top-0 left-0",
				"z-1",
				"pr-[11.2rem] pl-[11.8rem]",
			)}
			onMouseLeave={handleMouseLeave}
		>
			{/* 왼쪽 로고 */}
			<div className={cn("flex items-center justify-center", "left-4", "min-w-[11.7rem] gap-[1.2rem]")}>
				<button type="button" onClick={handleLogoClick}>
					<LogoIcon className={cn("w-[3.8rem]", "h-[3.2rem]")} />
				</button>
				<div className={cn("items-left flex flex-col")}>
					<span className={cn("body02 text-primary-red whitespace-nowrap")}>에브리타임</span>
					<span className={cn("label01 text-primary-black whitespace-nowrap")}>아주대</span>
				</div>
			</div>

			{/* 게시판 메뉴 hover 시에만 LNB 열기 (비활성 페이지에서는 no-op) */}
			<Navbar currentPage={currentPage} onBoardHover={isBoardEnabled ? handleBoardHover : undefined} />

			<UserButtonGroup />

			{/* LNB도 활성 페이지에서만 렌더링 + 상태 true일 때만 열기 */}
			{isBoardEnabled && <Lnb isOpen={isLnbOpen} />}
		</header>
	);
};

export { Header };
