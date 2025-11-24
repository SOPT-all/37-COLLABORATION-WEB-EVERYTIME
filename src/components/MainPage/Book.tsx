import { useState } from "react";

import type { MarketDataType } from "@/types/getMarketResponse";
import { BookItem } from "../common/item/BookItem";
import Logo from "@/assets/images/logo.svg?react";

interface BookComponentProps {
	books: MarketDataType[];
}

const Book = ({ books }: BookComponentProps) => {
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
			{books.map((book) => {
				const hasError = imageErrors.get(book.id) ?? false;

				return (
					<div key={book.id}>
						<div className="relative bg-gray-300" style={{ width: 152, height: 192 }}>
							{!hasError ? (
								<img
									src={book.bookImgUrl}
									alt={book.title}
									width={152}
									height={192}
									className="h-full w-full object-cover"
									onError={() => handleImageError(book.id)}
								/>
							) : (
								<div className="flex h-full w-full items-center justify-center bg-gray-200">
									<Logo width={40} height={40} className="opacity-30" />
								</div>
							)}
						</div>
						<BookItem title={book.title} price={book.price} />
					</div>
				);
			})}
		</div>
	);
};

export default Book;
