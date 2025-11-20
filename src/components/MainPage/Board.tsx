import { EMPTY_POSTS } from "@/constants/postsCount";
import { cn } from "@/utils/cn";

import { BoardItem } from "./BoardItem";
interface PostsItem {
	id: number;
	title: string;
	createdAt: string;
}
interface BoardProps {
	category: string;
	posts: PostsItem[];
}

const Board = ({ category, posts }: BoardProps) => {
	const isPostsEmpty = posts.length === EMPTY_POSTS;
	return (
		<>
			<div className={cn("h-[4rem] w-[38.8rem]", "bg-white", "border border-gray-300", "p-[1rem]")}>
				<p
					className={cn(
						"h-[2.1rem] max-w-[36.8rem] truncate",
						"title03 text-primary-red",
						"cursor-pointer",
						"inline-block",
					)}
				>
					{category}
				</p>
			</div>
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
		</>
	);
};

export { Board };
