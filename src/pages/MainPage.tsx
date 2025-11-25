import AdImg from "@/assets/images/img_ad1.png";
import { BoardContainer } from "@/components/MainPage/BoardContainer";
import Book from "@/components/MainPage/Book";
import { SearchTextField } from "@/components/SearchPage/SearchTextField";

const MainPage = () => {
	return (
		<div className="mx-auto flex w-[78rem] flex-col gap-[1.5rem]">
			<div className="flex flex-col gap-[0.4rem]">
				<SearchTextField
					variant="main"
					onKeywordChange={function (): void {
						throw new Error("Function not implemented.");
					}}
				/>
				<aside>
					<img src={AdImg} alt="광고 배너" className="h-[20.8rem] w-[78rem]" />
				</aside>
				<BoardContainer />
			</div>
			<Book />
		</div>
	);
};

export { MainPage };
