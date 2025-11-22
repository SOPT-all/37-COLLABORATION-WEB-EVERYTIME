import { AD_IMAGES } from "@/constants/adImages";
import { MOCK_LIVE_POST } from "@/mocks/posts";
import { cn } from "@/utils/cn";

import { ReviewItem } from "../item/ReviewItem";

import { LivePostItem } from "./LivePostItem";
import { MyHistory } from "./MyHistory";
import { ProfileItem } from "./ProfileItem";
import { SidebarHeader } from "./SidebarHeader";
import { SimplePostItem } from "./SimplePostItem";

const SIDEBAR_VARIENT = {
	/* Todo: 수정 */
	main: {
		showProfile: true,
		showMyHistory: true,
		showAds: true,
	},
	search: {
		showProfile: false,
		showMyHistory: false,
		showAds: false,
	},
} as const;

type SidebarVariant = keyof typeof SIDEBAR_VARIENT;

interface SidebarProps {
	variant: SidebarVariant;
}

function Sidebar({ variant }: SidebarProps) {
	const { showProfile, showMyHistory, showAds } = SIDEBAR_VARIENT[variant];

	return (
		<aside className={cn("w-[32rem]", "flex flex-col", "gap-[0.5rem]", "sticky", "top-[8rem]", "h-fit")}>
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
				<SimplePostItem title={"테스트1"} createdAt={"1111-11-11T11:11:11"} />
				<SimplePostItem title={"테스트2"} createdAt={"1111-11-11T11:11:11"} />
				<SimplePostItem title={"테스트3"} createdAt={"1111-11-11T11:11:11"} />
				<SimplePostItem title={"테스트4"} createdAt={"1111-11-11T11:11:11"} />
			</section>

			<section>
				<SidebarHeader title={"BEST 게시판"} isMore={true} />
			</section>

			<section>
				<SidebarHeader title={"최근 강의평"} isMore={true} />
				<ReviewItem rate={3} lectureTitle={"테스트"} professorName={"테스트"} reviewContent={"테스트"} />
				<ReviewItem rate={4} lectureTitle={"테스트2"} professorName={"테스트2"} reviewContent={"테스트2"} />
				<ReviewItem rate={5} lectureTitle={"테스트3"} professorName={"테스트3"} reviewContent={"테스트3"} />
			</section>

			{showAds &&
				AD_IMAGES.map(({ src, alt }) => (
					<img key={alt} src={src} alt={alt} className="h-auto w-[28rem] object-contain" />
				))}
		</aside>
	);
}

export { Sidebar };
