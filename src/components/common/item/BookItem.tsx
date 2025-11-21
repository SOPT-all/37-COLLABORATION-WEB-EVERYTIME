import { truncateByLength } from "@/utils/truncate";
import { cn } from "@/utils/cn";

interface BookItemProps {
	title: string;
	price: number;
}

const MAX_TITLE_LENGTH = 8;

const BookItem = ({ title, price }: BookItemProps) => {
	const truncatedTitle = truncateByLength(title, MAX_TITLE_LENGTH);
	const formattedPrice = price.toLocaleString("ko-KR");

	return (
		<article className={cn("flex h-[8rem] w-[14.4rem] flex-col gap-[2.3rem]", "border border-gray-300", "p-[1rem]")}>
			<h2 className="title08 text-gray-700">{truncatedTitle}</h2>
			<p className="body07 text-primary-red" aria-label={`가격 ${formattedPrice}원`}>
				{formattedPrice}원
			</p>
		</article>
	);
};

export { BookItem };
