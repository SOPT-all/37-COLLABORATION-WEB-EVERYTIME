import { useGetPosts } from "@/apis/queries";
import type { PostsDataType } from "@/types/getPostsResponse";

import { Board } from "./Board";
import { BoardContainerSkeleton } from "./BoardContainerSkeleton";

const BoardContainer = () => {
	const { data, isPending } = useGetPosts();
	const boards = (data?.data ?? []) as PostsDataType[];

	if (isPending) return <BoardContainerSkeleton />;

	return (
		<section aria-label="게시판 목록" className="grid grid-cols-2 gap-x-[0.4rem]">
			{boards.map((board) => (
				<Board key={board.category} category={board.category} posts={board.posts} />
			))}
		</section>
	);
};

export { BoardContainer };
