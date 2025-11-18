import { Lnb } from "@/components/common/header/Lnb";
import { SimplePostItem } from "@/components/common/sidebar/SimplePostItem";

const HomePage = () => {
	return (
		<div className="relative">
			<Lnb isOpen={true} />
			<SimplePostItem title="하둘셋넷다하둘셋넷다하둘셋넷다하둘셋넷다" createdAt="2025-11-15T15:10:00" />
		</div>
	);
};

export default HomePage;
