import { useGetPostsRealtime } from "@/apis/queries";
import IconMyComment from "@/assets/icons/icon_mycomment.svg?react";
import IconThumbsUp from "@/assets/icons/icon_thumbs_up.svg?react";
import { cn } from "@/utils/cn";

const LivePostItem = () => {
	const { data } = useGetPostsRealtime();
	const realtimePost = data?.data ?? null;

	if (!realtimePost) {
		return null;
	}

	return (
		<button
			type="button"
			className={cn(
				"flex flex-col items-start justify-center gap-[0.3rem] text-left",
				"h-[9.5rem] w-[28rem]",
				"pr-[1.45rem] pl-[1rem]",
				"border border-gray-400",
				"bg-gray-100",
				"hover:bg-white",
				"[&:not(:first-child)]:-mt-[1px]",
			)}
		>
			<h3 className={cn("title04 max-w-[26rem] truncate text-gray-800")}>{realtimePost.title}</h3>
			<p className={cn("body06 text-gray-600", "overflow-hidden", "max-h-[3.64rem]")}>{realtimePost.content}</p>

			<div className={cn("flex items-center gap-[2.2rem]")}>
				<span className={cn("caption01 text-gray-500")}>{realtimePost.category}</span>
				<div className={cn("flex items-center gap-[0.4rem]")}>
					<div className={cn("flex items-center gap-[0.1rem]")}>
						<IconThumbsUp className={cn("h-[1.8rem] w-[1.8rem]")} aria-hidden="true" />
						<span className={cn("caption04 text-primary-red")}>{realtimePost.likeCount}</span>
					</div>

					<div className={cn("flex items-center gap-[0.01rem]")}>
						<IconMyComment className={cn("h-[1.8rem] w-[1.8rem]")} aria-hidden="true" />
						<span className={cn("caption04 text-sub-green")}>{realtimePost.commentCount}</span>
					</div>
				</div>
			</div>
		</button>
	);
};

export { LivePostItem };
