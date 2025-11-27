import { cn } from "@/utils/cn";
interface BookItemProps {
	title: string;
	price: number;
}

const BookItem = ({ title, price }: BookItemProps) => {
	const formattedPrice = price.toLocaleString("ko-KR");

	return (
		<article
			className={cn(
				"flex flex-col items-start justify-between",
				"h-[8rem] w-[15.2rem]",
				"border border-gray-300 hover:bg-gray-200",
				"p-[1rem]",
			)}
		>
			<h2 className={cn("title08 line-clamp-2 break-words text-gray-700")}>{title}</h2>
			<p className="body07 text-primary-red" aria-label={`가격 ${formattedPrice}원`}>
				{formattedPrice}원
			</p>
		</article>
	);
};

export { BookItem };
