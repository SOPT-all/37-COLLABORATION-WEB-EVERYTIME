import { BADGE_BOARDS, BOARD_LIST } from "@/constants/boardList";
import type { LnbProps } from "@/types/lnb";
import { cn } from "@/utils/cn";

import { LnbItem } from "./LnbItem";

const Lnb = ({ isOpen, badgeBoards = [...BADGE_BOARDS] }: LnbProps) => {
	const handleBoardClick = () => {};

	// Lnb가 닫혀있으면 렌더링하지 않음
	if (!isOpen) return null;

	return (
		<nav
			className={cn(
				"border-bottom-1 border-gray-300 bg-gray-200",
				"z-2",
				"mt-[7rem]",
				"fixed",
				"top-0",
				"right-0",
				"w-full",
			)}
		>
			<div className="flex flex-col">
				{BOARD_LIST.map((board) => (
					<LnbItem key={board} title={board} hasBadge={badgeBoards.includes(board)} onClick={handleBoardClick} />
				))}
			</div>
		</nav>
	);
};

export { Lnb };
