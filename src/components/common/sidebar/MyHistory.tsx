import ArticleIcon from "@/assets/icons/icon_myarticle.svg?react";
import CommentIcon from "@/assets/icons/icon_mycomment.svg?react";
import ScrapIcon from "@/assets/icons/icon_myscrap.svg?react";

import { cn } from "@/utils/cn";

interface MyHistoryProps {
	variant: "article" | "comment" | "scrap";
	onClick: () => void;
}

const LABELS = {
	article: "내가 쓴 글",
	comment: "댓글 단 글",
	scrap: "내 스크랩",
} as const;

const ICONS = {
	article: ArticleIcon,
	comment: CommentIcon,
	scrap: ScrapIcon,
} as const;

const ICON_SIZE = 18;

const MyHistory = ({ variant, onClick }: MyHistoryProps) => {
	const label = LABELS[variant];
	const Icon = ICONS[variant];

	return (
		<button
			onClick={onClick}
			aria-label={label}
			type="button"
			className={cn(
				"flex h-[4rem] w-[28rem] items-center gap-[0.4rem]",
				"border border-gray-300 bg-gray-100",
				"p-[1rem]",
			)}
		>
			<Icon width={ICON_SIZE} height={ICON_SIZE} aria-hidden="true" />
			<span className="body05 text-gray-700">{label}</span>
		</button>
	);
};

export default MyHistory;
