import IconMyComment from "@/assets/icons/icon_mycomment.svg?react";
import IconThumbsUp from "@/assets/icons/icon_thumbs_up.svg?react";
import type { LivePost } from "@/types/post";
import { cn } from "@/utils/cn";
import { truncateByLength } from "@/utils/truncate";

interface LivePostItemProps {
	post: LivePost | null;
}

const LivePostItem = ({ post }: LivePostItemProps) => {
	if (!post) return null;

	const handleClick = () => {
		// 클릭 이벤트 핸들러
	};

	return (
		<article
			onClick={handleClick}
			className={cn(
				"flex h-[9.5rem] w-[28rem] flex-col items-start justify-center gap-[0.3rem] px-[1rem]",
				"cursor-pointer border border-gray-400 bg-gray-100 hover:bg-white",
			)}
		>
			<h3 className={cn("title04 max-w-[26rem] truncate text-gray-800")}>{truncateByLength(post.title, 21)}</h3>

			<p className={cn("body06 text-gray-600")}>{post.content.slice(0, 42)}</p>

			<div className={cn("flex items-center gap-[2.2rem]")}>
				<span className={cn("caption01 text-gray-500")}>{post.category}</span>

				<div className={cn("flex items-center gap-[0.6rem]")}>
					<div className={cn("flex items-center gap-[0.2rem]")}>
						<IconThumbsUp className={cn("h-[1.1rem] w-[1.1rem]")} />
						<span className={cn("caption04 text-primary-red")}>{post.likeCount}</span>
					</div>

					<div className={cn("flex items-center gap-[0.2rem]")}>
						<IconMyComment className={cn("h-[1.1rem] w-[1.1rem]")} />
						<span className={cn("caption04 text-sub-green")}>{post.commentCount}</span>
					</div>
				</div>
			</div>
		</article>
	);
};

export { LivePostItem };
