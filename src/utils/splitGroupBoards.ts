import type { BoardGroupsItemType } from "@/types/lnb";

export function splitGroupBoards(groups: readonly BoardGroupsItemType[], maxPerColumn: number = 8): string[][] {
	const columns: string[][] = [];

	groups.forEach((group) => {
		const boards = group.boards;
		for (let i = 0; i < boards.length; i += maxPerColumn) {
			columns.push(boards.slice(i, i + maxPerColumn));
		}
	});

	return columns;
}
