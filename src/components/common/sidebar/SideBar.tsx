import adImage2 from "@/assets/images/img_ad2.png";
import adImage3 from "@/assets/images/img_ad3.png";
import adImage4 from "@/assets/images/img_ad4.png";
import { MOCK_LIVE_POST } from "@/mocks/posts";
import { cn } from "@/utils/cn";

import { ReviewItem } from "../item/ReviewItem";

import { LivePostItem } from "./LivePostItem";
import { MyHistory } from "./MyHistory";
import { ProfileItem } from "./ProfileItem";
import { SidebarHeader } from "./SidebarHeader";
import { SimplePostItem } from "./SimplePostItem";

const AD_IMAGES = [
	{ src: adImage2, alt: "광고 배너 2" },
	{ src: adImage3, alt: "광고 배너 3" },
	{ src: adImage4, alt: "광고 배너 4" },
];

interface SidebarProps {
	showProfile?: boolean;
	showMyHistory?: boolean;
}

function Sidebar({ showProfile = false, showMyHistory = false }: SidebarProps) {
	return (
		<aside className={cn("w-[32rem]", "flex flex-col", "gap-[0.5rem]", "sticky", "top-[8rem]", "h-fit")}>
			{showProfile && showMyHistory && (
				<>
					<ProfileItem nickname={"테스트"} name={"테스트"} userId={"test01"} />

					<div>
						<MyHistory variant={"article"} onClick={() => console.log("article clicked")} />
						<MyHistory variant={"comment"} onClick={() => console.log("comment clicked")} />
						<MyHistory variant={"scrap"} onClick={() => console.log("scrap clicked")} />
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

			{AD_IMAGES.map(({ src, alt }) => (
				<img key={alt} src={src} alt={alt} className="h-auto w-[28rem] object-contain" />
			))}
		</aside>
	);
}

export { Sidebar };
