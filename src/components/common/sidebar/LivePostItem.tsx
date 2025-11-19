import IconMyComment from "@/assets/icons/icon_mycomment.svg?react";
import IconThumbsUp from "@/assets/icons/icon_thumbs_up.svg?react";
import type { LivePostItemProps } from "@/types/livePostItem";
import { cn } from "@/utils/cn";
import { truncateByLength } from "@/utils/truncate";

const LivePostItem = ({ post }: LivePostItemProps) => {
	// 게시글이 없으면 렌더링하지 않음
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
			{/* 게시글 제목 - 21자까지, 초과 시 ... */}
			<h3 className="title04 max-w-[26rem] truncate text-gray-800">{truncateByLength(post.title, 21)}</h3>

			{/* 게시글 내용 - 42자까지, 말줄임표 없이 잘림 */}
			<p className="body06 text-gray-600">{post.content.slice(0, 42)}</p>

			{/* 게시판 이름 + 좋아요/댓글 */}
			<div className="flex items-center gap-[2.2rem]">
				{/* 게시판 이름 */}
				<span className="caption01 text-gray-500">{post.category}</span>

				{/* 게시글 정보 (좋아요, 댓글) */}
				<div className="flex items-center gap-[0.6rem]">
					{/* 좋아요 */}
					<div className="flex items-center gap-[0.2rem]">
						<IconThumbsUp className="h-[1.1rem] w-[1.1rem]" />
						<span className="caption04 text-primary-red">{post.likeCount}</span>
					</div>

					{/* 댓글 */}
					<div className="flex items-center gap-[0.2rem]">
						<IconMyComment className="h-[1.1rem] w-[1.1rem]" />
						<span className="caption04 text-sub-green">{post.commentCount}</span>
					</div>
				</div>
			</div>
		</article>
	);
};

export { LivePostItem };
