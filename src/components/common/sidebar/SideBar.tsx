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

			<div>
				<SidebarHeader title={"실시간 인기 글"} isMore={false} />
				<LivePostItem post={MOCK_LIVE_POST} />
				<LivePostItem post={MOCK_LIVE_POST} />
			</div>

			<div>
				<SidebarHeader title={"HOT 게시물"} isMore={true} />
				<SimplePostItem title={"테스트1"} createdAt={"1111-11-11T11:11:11"} />
				<SimplePostItem title={"테스트2"} createdAt={"1111-11-11T11:11:11"} />
			</div>

			<SidebarHeader title={"BEST 게시판"} isMore={true} />

			<div>
				<SidebarHeader title={"최근 강의평"} isMore={true} />
				<ReviewItem rate={3} lectureTitle={"테스트"} professorName={"테스트"} reviewContent={"테스트"} />
				<ReviewItem rate={3} lectureTitle={"테스트"} professorName={"테스트"} reviewContent={"테스트"} />
			</div>

			<img src={adImage2} alt="광고 배너 2" className="w-[28rem] object-contain" />
			<img src={adImage3} alt="광고 배너 3" className="w-[28rem] object-contain" />
			<img src={adImage4} alt="광고 배너 4" className="w-[28rem] object-contain" />
		</aside>
	);
}

export { Sidebar };
