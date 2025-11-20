import { ProfileItem } from "@/components/common/sidebar/ProfileItem";
import { SimplePostItem } from "@/components/common/sidebar/SimplePostItem";

const MainPage = () => {
	return (
		<div className="relative">
			<SimplePostItem title="하둘셋넷다하둘셋넷다하둘셋넷다하둘셋넷다" createdAt="2025-11-15T15:10:00" />
			<ProfileItem nickname="전설의 맛" name="김경아" userId="ruddk0821" />
		</div>
	);
};

export { MainPage };
