import { EMPTY_POSTS } from "@/constants/postsCount";
import { cn } from "@/utils/cn";

import { BoardItem } from "./BoardItem";
interface PostsItem {
	id: number;
	title: string;
	createdAt: string;
}
interface BoardItemWrapperProps {
	posts: PostsItem[];
}

const BoardItemWrapper = ({ posts }: BoardItemWrapperProps) => {
	const isPostsEmpty = posts.length === EMPTY_POSTS;
	return (
		<div
			className={cn(
				"h-[15.2rem] w-[38.8rem] bg-white",
				isPostsEmpty && [
					"border-r border-b border-l border-gray-300",
					"flex items-center p-[1rem]",
					"hover:bg-gray-200",
				],
			)}
		>
			{isPostsEmpty ? (
				<p className={cn("w-[28rem]", "body05")}>게시글이 없습니다.</p>
			) : (
				posts.map((post) => <BoardItem key={post.id} content={post.title} createdAt={post.createdAt} />)
			)}
		</div>
	);
};

export { BoardItemWrapper };
