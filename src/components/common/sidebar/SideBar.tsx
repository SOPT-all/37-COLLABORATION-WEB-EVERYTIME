import { useLocation } from "react-router-dom";

import { AD_IMAGES } from "@/constants/adImages";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/utils/cn";

import { LivePostItem } from "./LivePostItem";
import { MyHistory } from "./MyHistory";
import { ProfileItem } from "./ProfileItem";
import { ReviewContainer } from "./ReviewContainer";
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
				<ReviewContainer />
			</section>

			{isHomePage &&
				AD_IMAGES.map(({ src, alt }) => (
					<img key={alt} src={src} alt={alt} className="h-auto w-[28rem] object-contain" />
				))}
		</aside>
	);
}

export { Sidebar };
