import { AD_IMAGES } from "@/constants/adImages";
import { MOCK_LIVE_POST } from "@/mocks/posts";
import { cn } from "@/utils/cn";

import { ReviewItem } from "../item/ReviewItem";

import { LivePostItem } from "./LivePostItem";
import { MyHistory } from "./MyHistory";
import { ProfileItem } from "./ProfileItem";
import { SidebarHeader } from "./SidebarHeader";
import { SimplePostItem } from "./SimplePostItem";

const SIDEBAR_VARIANT = {
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

type SidebarVariant = keyof typeof SIDEBAR_VARIANT;

interface SidebarProps {
	variant: SidebarVariant;
}

function Sidebar({ variant }: SidebarProps) {
	const { showProfile, showMyHistory, showAds } = SIDEBAR_VARIANT[variant];

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
				<ReviewItem
					rate={3}
					lectureTitle={"데이터베이스"}
					professorName={"송충건"}
					reviewContent={
						"교수님 진짜 친절하시고 학생들 배려 많이 해주십니다. 근데 시험은 전부 서술형이라 꼼꼼하게 공부하시는게 좋아요."
					}
				/>
				<ReviewItem
					rate={5}
					lectureTitle={"융합프로그래밍1"}
					professorName={"한웅진"}
					reviewContent={
						"시험 난이도도 괜찮고 무엇보다 교수님 강의력이 정말 좋아요. 조교님도 실습시간때마다 잘 설명해주셔서 감사했습니다~"
					}
				/>
				<ReviewItem
					rate={1}
					lectureTitle={"파이썬 프로그래밍"}
					professorName={"조성균"}
					reviewContent={"하.... 그냥 안습 ㅋㅋㅋ"}
				/>
			</section>

			{showAds &&
				AD_IMAGES.map(({ src, alt }) => (
					<img key={alt} src={src} alt={alt} className="h-auto w-[28rem] object-contain" />
				))}
		</aside>
	);
}

export { Sidebar };
