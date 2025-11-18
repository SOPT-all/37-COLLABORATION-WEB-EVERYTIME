import { Lnb } from "@/components/common/header/Lnb";
import { SimplePostItem } from "@/components/common/post/SimplePostItem";

const HomePage = () => {
	return (
		<div className="relative">
			<Lnb isOpen={true} />
			<SimplePostItem
				title="하둘셋넷다하둘셋넷다하둘셋넷다하둘셋넷다"
				createdAt="2025-11-15T15:10:00"
				onClick={() => console.log("클릭")}
			/>
		</div>
	);
};

export default HomePage;
