import { useGetPosts } from "@/apis/queries";
import { Board } from "@/components/MainPage/Board";
import type { PostsDataType } from "@/types/getPostsResponse";

const BoardContainer = () => {
	const { data } = useGetPosts();
	const boards = (data?.data ?? []) as PostsDataType[];

	return (
		<section aria-label="게시판 목록" className="grid grid-cols-2 gap-x-[0.4rem]">
			{boards.map((board) => (
				<Board key={board.category} category={board.category} posts={board.posts} />
			))}
		</section>
	);
};

export { BoardContainer };
