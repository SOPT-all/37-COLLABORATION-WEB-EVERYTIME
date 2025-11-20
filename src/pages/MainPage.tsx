import { LivePostItem } from "@/components/common/sidebar/LivePostItem";
import { ProfileItem } from "@/components/common/sidebar/ProfileItem";
import { SimplePostItem } from "@/components/common/sidebar/SimplePostItem";
import { MOCK_LIVE_POST, MOCK_EMPTY_LIVE_POST } from "@/mocks/posts";

const MainPage = () => {
	return (
		<div className="relative">
			<SimplePostItem title="하둘셋넷다하둘셋넷다하둘셋넷다하둘셋넷다" createdAt="2025-11-15T15:10:00" />
			{/* 실시간 인기 글이 있는 경우 */}
			<LivePostItem post={MOCK_LIVE_POST} />

			{/* 조건에 맞는 게시글이 없는 경우 (아무것도 렌더링 안됨) */}
			<LivePostItem post={MOCK_EMPTY_LIVE_POST} />
			<ProfileItem nickname="전설의 맛" name="김경아" userId="ruddk0821" />
		</div>
	);
};

export { MainPage };
