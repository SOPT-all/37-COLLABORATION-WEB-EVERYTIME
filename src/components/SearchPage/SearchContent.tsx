import Comment from "@/assets/icons/icon_comment.svg?react";
import ThumbsUp from "@/assets/icons/icon_thumbs_up.svg?react";
import { SearchHighlight } from "@/components/SearchPage/SearchHighlight";
import type { PostsSearchPostsType } from "@/types/getPostsSearchResponse";
import { categoryEngToKor } from "@/utils/categoryChanger";
import { cn } from "@/utils/cn";
import { formatDateForSearch } from "@/utils/formatDate";
import { splitIntoTwoLines } from "@/utils/highlight";

interface SearchContentProps {
	searchTerm: string;
	searchResult: PostsSearchPostsType;
}

const SearchContent = ({ searchTerm, searchResult }: SearchContentProps) => {
	const hasLike = searchResult.likeCount > 0;
	const hasComment = searchResult.commentCount > 0;
	const { firstLine, secondLine } = splitIntoTwoLines(searchResult.content);
	const date = formatDateForSearch(searchResult.createdAt);
	const label = categoryEngToKor(searchResult.category);
	return (
		<div
			className={cn(
				"px-[2.4rem] py-[1.6rem]",
				"bg-white",
				"border-r border-b border-l border-gray-400",
				"h-[13rem] w-[78rem]",
				"flex flex-col gap-[0.6rem]",
				"cursor-pointer",
				"hover:bg-gray-100",
			)}
		>
			<div className={cn("h-[7.6rem] w-[73.2rem]", "flex flex-col gap-[0.4rem]")}>
				<p className={cn("title05 text-sub-blue text-left")}>{label}</p>
				<div>
					<SearchHighlight
						searchTerm={searchTerm}
						content={searchResult.title}
						styleCss="title04 text-primary-black mb-[0.2rem]"
					/>
					<SearchHighlight searchTerm={searchTerm} content={firstLine} styleCss="body06 text-gray-800" />
					{secondLine && (
						<SearchHighlight
							searchTerm={searchTerm}
							content={secondLine}
							styleCss="body06 w-[73.2rem] truncate text-gray-800"
						/>
					)}
				</div>
			</div>
			<div className={cn("flex items-center")}>
				{(hasLike || hasComment) && (
					<ul
						className={cn(
							"flex items-center gap-[0.4rem]",
							"after:mr-[0.4rem] after:h-[0.65rem] after:border-l after:border-gray-300 after:content-['']",
						)}
					>
						{hasLike && (
							<li className={cn("flex items-center gap-[0.4rem]")}>
								<ThumbsUp width={18} height={18} />
								<span className={cn("caption04 text-primary-red")}>{searchResult.likeCount}</span>
							</li>
						)}

						{hasComment && (
							<li className={cn("flex items-center gap-[0.4rem]")}>
								<Comment width={18} height={18} />
								<span className={cn("caption04 text-sub-green")}>{searchResult.commentCount}</span>
							</li>
						)}
					</ul>
				)}
				<time
					className={cn(
						"flex items-center",
						"caption01 text-gray-500",
						"after:mx-[0.4rem] after:h-[0.65rem] after:border-l after:border-gray-300 after:content-['']",
					)}
				>
					{date}
				</time>
				<span className={cn("caption03 text-gray-500")}>
					{searchResult.isAnonymous ? "익명" : searchResult.nickname}
				</span>
			</div>
		</div>
	);
};

export { SearchContent };
