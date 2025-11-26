import { useNavigate } from "react-router-dom";

import AdImg from "@/assets/images/img_ad1.png";
import { DelayedSuspense } from "@/components/common/DelayedSuspense";
import { BoardContainer } from "@/components/MainPage/BoardContainer";
import { BoardContainerSkeleton } from "@/components/MainPage/BoardContainerSkeleton";
import Book from "@/components/MainPage/Book";
import BookSkeleton from "@/components/MainPage/BookSkeleton";
import { SearchTextField } from "@/components/SearchPage/SearchTextField";
import { useSearchForm } from "@/hooks/useSearchForm";

const MainPage = () => {
	const { keyword, onKeywordChange } = useSearchForm();
	const navigate = useNavigate();

	const handleSearch = () => {
		const trimmedKeyword = keyword.trim();
		navigate(`/search?category=ALL&keyword=${trimmedKeyword}&page=1`);
		window.scrollTo(0, 0);
	};
	return (
		<div className="mx-auto flex w-[78rem] flex-col gap-[1.5rem]">
			<div className="flex flex-col gap-[0.4rem]">
				<SearchTextField usage="main" keyword={keyword} onKeywordChange={onKeywordChange} onSearch={handleSearch} />
				<aside>
					<img src={AdImg} alt="광고 배너" className="h-[20.8rem] w-[78rem]" />
				</aside>
				<DelayedSuspense fallback={<BoardContainerSkeleton />} delay={200}>
					<BoardContainer />
				</DelayedSuspense>
			</div>
			<DelayedSuspense fallback={<BookSkeleton />} delay={200}>
				<Book />
			</DelayedSuspense>
		</div>
	);
};

export { MainPage };
