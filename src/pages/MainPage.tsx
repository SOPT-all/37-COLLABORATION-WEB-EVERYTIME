import { useNavigate } from "react-router-dom";

import AdImg from "@/assets/images/img_ad1.png";
import { BoardContainer } from "@/components/MainPage/BoardContainer";
import Book from "@/components/MainPage/Book";
import { SearchTextField } from "@/components/SearchPage/SearchTextField";
import { useSearchForm } from "@/hooks/useSearchForm";
import { MOCK_BOOKS } from "@/mocks/books";

const MainPage = () => {
	const { keyword, onKeywordChange } = useSearchForm();
	const navigate = useNavigate();

	const handleSearch = () => {
		// TODO: api 연동 예정
		console.log("main page search:", `/search?keyword=${keyword}`);
		navigate(`/search?keyword=${keyword}`);
	};
	return (
		<div className="mx-auto flex w-[78rem] flex-col gap-[1.5rem]">
			<div className="flex flex-col gap-[0.4rem]">
				<SearchTextField usage="main" keyword={keyword} onKeywordChange={onKeywordChange} onSearch={handleSearch} />
				<aside>
					<img src={AdImg} alt="광고 배너" className="h-[20.8rem] w-[78rem]" />
				</aside>
				<BoardContainer />
			</div>
			<Book books={MOCK_BOOKS} />
		</div>
	);
};

export { MainPage };
