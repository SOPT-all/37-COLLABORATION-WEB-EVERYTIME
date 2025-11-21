import { cn } from "@/utils/cn";

import { ReviewItem } from "../item/ReviewItem";

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

			<SidebarHeader title={"실시간 인기 글"} isMore={false} />
			{/* <LivePostItem /> */}

			<div>
				<SidebarHeader title={"HOT 게시물"} isMore={true} />
				<SimplePostItem title={"테스트1"} createdAt={"1111-11-11T11:11:11"} />
				<SimplePostItem title={"테스트2"} createdAt={"1111-11-11T11:11:11"} />
			</div>

			<SidebarHeader title={"BEST 게시판"} isMore={false} />

			<ReviewItem rate={3} lectureTitle={"테스트"} professorName={"테스트"} reviewContent={"테스트"} />
		</aside>
	);
}

export { Sidebar };
