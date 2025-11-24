import { useGetReviews } from "@/apis/queries";
import { AD_IMAGES } from "@/constants/adImages";
import { SIDEBAR_VARIANT, type SidebarVariant } from "@/constants/sidebarVariant";
import { MOCK_LIVE_POST } from "@/mocks/posts";
import { cn } from "@/utils/cn";

import { ReviewItem } from "../item/ReviewItem";
import ReviewItemSkeleton from "../item/ReviewItemSkeleton";

import { LivePostItem } from "./LivePostItem";
import { MyHistory } from "./MyHistory";
import { ProfileItem } from "./ProfileItem";
import { SidebarHeader } from "./SidebarHeader";
import { SimplePostItem } from "./SimplePostItem";

interface SidebarProps {
	variant: SidebarVariant;
}

function Sidebar({ variant }: SidebarProps) {
	const { showProfile, showMyHistory, showAds } = SIDEBAR_VARIANT[variant];

	const { data, isLoading, isError } = useGetReviews();

	const reviews = data?.data ?? [];

	return (
		<aside className={cn("flex flex-col", "gap-[0.5rem]", "top-[8rem]")}>
			{showProfile && showMyHistory && (
				<>
					<ProfileItem nickname={"전설의 맛"} name={"김솝트"} userId={"soptalien"} />

					<div>
						<MyHistory variant={"article"} onClick={() => {}} />
						<MyHistory variant={"comment"} onClick={() => {}} />
						<MyHistory variant={"scrap"} onClick={() => {}} />
					</div>
				</>
			)}

			<section>
				<SidebarHeader title={"실시간 인기 글"} isMore={false} />
				<LivePostItem post={MOCK_LIVE_POST} />
			</section>

			<section>
				<SidebarHeader title={"HOT 게시물"} isMore={true} />
				<SimplePostItem title={"학교에 푸드트럭 왔대"} createdAt={"2025-11-11T23:11:11"} />
				<SimplePostItem title={"다들 시험 공부"} createdAt={"2025-11-11T15:14:11"} />
				<SimplePostItem title={"[홍보] 제 37회 학생대표자 선거 "} createdAt={"2025-11-09T10:21:11"} />
				<SimplePostItem title={"단과대학 로고 공모전 안내"} createdAt={"2025-11-09T01:00:11"} />
			</section>

			<section>
				<SidebarHeader title={"BEST 게시판"} isMore={true} />
			</section>

			<section>
				<SidebarHeader title={"최근 강의평"} isMore={true} />

				{isLoading && (
					<div className="flex flex-col">
						<ReviewItemSkeleton />
						<ReviewItemSkeleton />
						<ReviewItemSkeleton />
					</div>
				)}

				{isError && <p className="text-[1.2rem] text-red-500">강의평을 불러오지 못했습니다.</p>}

				{!isLoading && !isError && (
					<div className="flex flex-col">
						{reviews.map((review) => (
							<ReviewItem
								key={review.id}
								rate={review.rate}
								lectureTitle={review.lecture}
								professorName={review.professor}
								reviewContent={review.content}
							/>
						))}
					</div>
				)}
			</section>

			{showAds &&
				AD_IMAGES.map(({ src, alt }) => (
					<img key={alt} src={src} alt={alt} className="h-auto w-[28rem] object-contain" />
				))}
		</aside>
	);
}

export { Sidebar };
