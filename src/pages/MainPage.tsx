import { SearchTextField } from "@/components/SearchPage/SearchTextField";
import AdImg from "@/assets/images/img_ad1.png";
import { BoardContainer } from "@/components/MainPage/BoardContainer";
import Book from "@/components/MainPage/Book";
import { MOCK_BOOKS } from "@/mocks/books";

const MainPage = () => {
	return (
		<main className="mt-[2rem]">
			{/* TODO: 사이드바 컴포넌트 추가 */}
			<div className="mx-auto flex w-[78rem] flex-col gap-[1.5rem]">
				<div className="flex flex-col gap-[0.4rem]">
					<SearchTextField variant="main" />
					<aside>
						<img src={AdImg} alt="광고 배너" className="h-[20.8rem] w-[78rem]" />
					</aside>
					<BoardContainer />
				</div>
				<Book books={MOCK_BOOKS} />
			</div>
		</main>
	);
};

export { MainPage };
