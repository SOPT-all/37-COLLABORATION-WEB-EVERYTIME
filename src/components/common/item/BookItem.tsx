import { cn } from "@/utils/cn";

interface BookItemProps {
	title: string;
	price: number;
	imgUrl: string;
}

const MAX_TITLE_LENGTH = 10;

const BookItem = ({ title, price, imgUrl }: BookItemProps) => {
	const truncatedTitle = truncateByLength(title, MAX_TITLE_LENGTH);
	const formattedPrice = price.toLocaleString("ko-KR");

	return (
		<button type="button" className={cn()}>
			<img src={imgUrl} alt={title} className={cn("relative h-[19.2rem] w-[15.2rem] object-cover")} />
			<article
				className={cn(
					"flex h-[8rem] w-[15.2rem] flex-col gap-[2.3rem]",
					"border border-gray-300 hover:bg-gray-200",
					"items-start p-[1rem]",
				)}
			>
				<h2 className="title08 text-gray-700">{truncatedTitle}</h2>
				<p className="body07 text-primary-red" aria-label={`가격 ${formattedPrice}원`}>
					{formattedPrice}원
				</p>
			</article>
		</button>
	);
};

export { BookItem };
