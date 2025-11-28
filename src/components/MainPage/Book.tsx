import { useState } from "react";

import { useGetMarket } from "@/apis/queries";
import Logo from "@/assets/images/logo.svg?react";
import type { MarketDataType } from "@/types/getMarketResponse";
import { cn } from "@/utils/cn";

import { BookItem } from "../common/item/BookItem";

const Book = () => {
	const { data: marketResponse } = useGetMarket();
	const bookList = (marketResponse?.data ?? []) as MarketDataType[];

	const [imageErrors, setImageErrors] = useState<Map<number, boolean>>(new Map());

	const handleImageError = (bookId: number) => {
		setImageErrors((prev) => {
			const newMap = new Map(prev);
			newMap.set(bookId, true);
			return newMap;
		});
	};

	return (
		<div className="flex gap-[0.5rem]">
			{bookList.map((book) => {
				return <BookItem key={book.id} title={book.title} price={book.price} imgUrl={book.bookImgUrl} />;
			})}
		</div>
	);
};

export default Book;
