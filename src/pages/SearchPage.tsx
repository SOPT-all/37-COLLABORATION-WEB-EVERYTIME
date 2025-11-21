import { SearchContainer } from "@/components/SearchPage/pagination/SearchContainer";
import { cn } from "@/utils/cn";
const SearchPage = () => {
	return (
		<main className={cn("mt-[2rem]")}>
			{/* TODO: 사이드바 컴포넌트 추가 */}
			<div className={cn("mx-auto flex w-[78rem] flex-col gap-[1.5rem]")}>
				<SearchContainer />
			</div>
		</main>
	);
};

export { SearchPage };
