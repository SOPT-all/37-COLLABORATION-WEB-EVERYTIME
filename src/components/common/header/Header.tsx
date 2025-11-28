import { useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import LogoIcon from "@/assets/images/logo.svg?react";
import { Lnb } from "@/components/common/header/Lnb";
import { Navbar } from "@/components/common/header/Navbar";
import { UserButtonGroup } from "@/components/common/header/UserButtonGroup";
import { ROUTES } from "@/constants/paths";
import { cn } from "@/utils/cn";

const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [searchParams] = useSearchParams();

	const currentPage = "게시판";
	const [isLnbOpen, setIsLnbOpen] = useState(false);

	// lnb 오픈 가능 여부 판단
	const isValidLNBContext = (() => {
		const path = location.pathname;
		if (path === "/") return true;

		if (path === "/search") {
			const keyword = searchParams.get("keyword") ?? "";
			return keyword.trim().length > 0;
		}

		return false;
	})();

	const handleLogoClick = () => {
		window.scrollTo(0, 0);
		navigate(ROUTES.HOME);
	};

	const handleBoardHover = () => {
		if (!isValidLNBContext) return;
		if (!isLnbOpen) setIsLnbOpen(true);
	};

	const handleMouseLeave = () => {
		if (!isValidLNBContext) return;
		if (isLnbOpen) setIsLnbOpen(false);
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

			<Navbar currentPage={currentPage} onBoardHover={handleBoardHover} />
			<UserButtonGroup />

			{isValidLNBContext && <Lnb isOpen={isLnbOpen} />}
		</header>
	);
};

export { Header };
