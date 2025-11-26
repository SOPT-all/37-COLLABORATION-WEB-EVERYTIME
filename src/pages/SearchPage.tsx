import { SearchContainer } from "@/components/SearchPage/SearchContainer";
import { cn } from "@/utils/cn";
const SearchPage = () => {
	return (
		<div className={cn("mx-auto flex w-[78rem] flex-col gap-[1.5rem]")}>
			<SearchContainer />
		</div>
	);
};

export { SearchPage };
