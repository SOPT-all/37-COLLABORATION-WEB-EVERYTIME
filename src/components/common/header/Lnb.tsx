import { Fragment } from "react/jsx-runtime";

import { BOARD_GROUPS, BADGES } from "@/constants/constants";
import type { LnbProps } from "@/types/lnb";
import { cn } from "@/utils/cn";
import { splitGroupBoards } from "@/utils/splitGroupBoards";

import { LnbItem } from "./LnbItem";
import { LnbSearch } from "./LnbSearch";

const Lnb = ({ isOpen }: LnbProps) => {
	const columns = splitGroupBoards(BOARD_GROUPS, 8);

	return (
		<section
			className={cn(
				"border-b border-gray-400 bg-gray-200",
				"fixed top-[7rem] right-0 z-10 w-full",
				"flex items-center justify-center",
				"transition-opacity duration-200 ease-in-out",
				isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
			)}
		>
			<div className="flex flex-row px-[1.7rem] py-[1.7rem]">
				{columns.map((column, idx) => (
					<div
						key={column[0]}
						className={cn(
							"flex w-[16.1rem] flex-col gap-1 pl-[1.6rem]",
							"border-gray-300",
							idx !== 1 && "border-l-[1px]",
							idx === columns.length - 1 && "border-r-[1px]",
						)}
					>
						{column.map((board, boardIdx) => (
							<Fragment key={board}>
								<LnbItem title={board} hasBadge={BADGES.includes(board)} />
								{idx === columns.length - 1 && boardIdx === column.length - 1 && <LnbSearch />}
							</Fragment>
						))}
					</div>
				))}
			</div>
		</section>
	);
};

export { Lnb };
