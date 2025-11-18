import { BOARD_GROUPS, BADGE_BOARDS } from "@/constants/boardList";
import type { LnbProps } from "@/types/lnb";
import { cn } from "@/utils/cn";
import { splitGroupBoards } from "@/utils/splitGroupBoards";

import { LnbItem } from "./LnbItem";

const Lnb = ({ isOpen }: LnbProps) => {
	if (!isOpen) return null;

	// 그룹 내부에서도 8개씩 잘라 컬럼 배열 생성
	const columns = splitGroupBoards(BOARD_GROUPS, 8);

	return (
		<nav
			className={cn(
				"border-b border-gray-400 bg-gray-200",
				"fixed top-0 right-0 z-10 mt-[7rem] w-full",
				"flex items-center justify-center",
			)}
		>
			<div className="flex flex-row px-[1.7rem] py-[1.7rem]">
				{columns.map((column, idx) => (
					<div
						key={idx}
						className={cn(
							"flex w-[16rem] flex-col gap-1 pl-1",
							"border-gray-300",
							idx !== columns.length - 1 ? "border-r-[1px]" : "",
						)}
					>
						{column.map((board) => (
							<LnbItem key={board} title={board} hasBadge={BADGE_BOARDS.includes(board)} />
						))}
					</div>
				))}
			</div>
		</nav>
	);
};

export { Lnb };
