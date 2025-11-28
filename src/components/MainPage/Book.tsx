import { useGetMarket } from "@/apis/queries";
import { BookItem } from "@/components/common/item/BookItem";
import type { MarketDataType } from "@/types/getMarketResponse";
import { cn } from "@/utils/cn";

const Book = () => {
	const { data: marketResponse } = useGetMarket();
	const bookList = (marketResponse?.data ?? []) as MarketDataType[];

	return (
		<div className={cn("flex gap-[0.5rem]")}>
			{bookList.map((book) => {
				return <BookItem key={book.id} title={book.title} price={book.price} imgUrl={book.bookImgUrl} />;
			})}
		</div>
	);
};

export { Book };
