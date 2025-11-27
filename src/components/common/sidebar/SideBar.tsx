import { useLocation } from "react-router-dom";

import { DelayedSuspense } from "@/components/common/DelayedSuspense";
import { AD_IMAGES } from "@/constants/adImages";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils/cn";

import { LivePostItem } from "./LivePostItem";
import { LivePostItemSkeleton } from "./LivePostItemSkeleton";
import { MyHistory } from "./MyHistory";
import { PostsHotContainer } from "./PostsHotContainer";
import { ProfileItem } from "./ProfileItem";
import { ReviewContainer } from "./ReviewContainer";
import { ReviewItemSkeleton } from "./ReviewItemSkeleton";
import { SidebarHeader } from "./SidebarHeader";
import { SimplePostItemSkeletonList } from "./SimplePostItemSkeletonList";

function Sidebar() {
	const { pathname } = useLocation();
	const isHomePage = pathname === ROUTES.HOME;

	return (
		<aside className={cn("flex flex-col", "gap-[0.5rem]", "top-[8rem]")}>
			{isHomePage && (
				<>
					<ProfileItem nickname="전설의 맛" name="김솝트" userId="soptalien" />

					<div>
						<MyHistory variant="article" />
						<MyHistory variant="comment" />
						<MyHistory variant="scrap" />
					</div>
				</>
			)}

			<section>
				<SidebarHeader title={"실시간 인기 글"} isMore={false} />
				<DelayedSuspense fallback={<LivePostItemSkeleton />} delay={200}>
					<LivePostItem />
				</DelayedSuspense>
			</section>

			<section>
				<SidebarHeader title="HOT 게시물" isMore={true} />
				<DelayedSuspense fallback={<SimplePostItemSkeletonList />} delay={200}>
					<PostsHotContainer />
				</DelayedSuspense>
			</section>

			<section>
				<SidebarHeader title={"BEST 게시판"} isMore={true} />
			</section>

			<section>
				<SidebarHeader title={"최근 강의평"} isMore={true} />
				<DelayedSuspense fallback={<ReviewItemSkeleton />} delay={200}>
					<ReviewContainer />
				</DelayedSuspense>
			</section>

			{isHomePage &&
				AD_IMAGES.map(({ src, alt }) => (
					<img key={alt} src={src} alt={alt} className="h-auto w-[28rem] object-contain" />
				))}
		</aside>
	);
}

export { Sidebar };
