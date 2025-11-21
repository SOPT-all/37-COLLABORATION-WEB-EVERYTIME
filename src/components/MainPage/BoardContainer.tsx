import { Board } from "./Board";
import { MAIN_PAGE_BOARD_CATEGORIES } from "@/constants/mainPageBoards";
import { MOCK_MAIN_PAGE_BOARDS } from "@/mocks/mainPageBoards";

const BoardContainer = () => {
	const sortedBoards = MAIN_PAGE_BOARD_CATEGORIES.map((category) => {
		const boardData = MOCK_MAIN_PAGE_BOARDS.data.find((board) => board.category === category);
		return boardData || { category, posts: [] };
	});

	return (
		<section aria-label="게시판 목록" className="grid grid-cols-2 gap-x-[0.4rem]">
			{sortedBoards.map((board) => (
				<Board key={board.category} category={board.category} posts={board.posts} />
			))}
		</section>
	);
};

export { BoardContainer };
