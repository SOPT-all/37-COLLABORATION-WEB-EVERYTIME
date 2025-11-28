import { useGetMarket } from "@/apis/queries";
import type { MarketDataType } from "@/types/getMarketResponse";
import { cn } from "@/utils/cn";

import { BookItem } from "../common/item/BookItem";

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

export default Book;
