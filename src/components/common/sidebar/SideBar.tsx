import { useLocation } from "react-router-dom";

import { AD_IMAGES } from "@/constants/adImages";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils/cn";

import { LivePostItem } from "./LivePostItem";
import { MyHistory } from "./MyHistory";
import { ProfileItem } from "./ProfileItem";
import { ReviewItem } from "./ReviewItem";
import { SidebarHeader } from "./SidebarHeader";
import { SimplePostItem } from "./SimplePostItem";

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
				<LivePostItem />
			</section>

			<section>
				<SidebarHeader title={"HOT 게시물"} isMore={true} />
				<SimplePostItem title={"학교에 푸드트럭 왔대"} createdAt={"2025-11-11T23:11:11"} />
				<SimplePostItem title={"다들 시험 공부"} createdAt={"2025-11-10T15:14:11"} />
				<SimplePostItem title={"[홍보] 제 37회 학생대표자 선거 안내입니다. "} createdAt={"2025-11-09T10:21:11"} />
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

			{isHomePage &&
				AD_IMAGES.map(({ src, alt }) => (
					<img key={alt} src={src} alt={alt} className="h-auto w-[28rem] object-contain" />
				))}
		</aside>
	);
}

export { Sidebar };
