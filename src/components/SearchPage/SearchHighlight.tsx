import { cn } from "@/utils/cn";
import { highlightClass } from "@/utils/highlight";

interface SearchHighlightProps {
	searchTerm: string;
	content: string;
	styleCss: string;
}

const SearchHighlight = ({ searchTerm, content, styleCss }: SearchHighlightProps) => {
	const textWithSpecialSymbol = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	const reg = new RegExp(`(${textWithSpecialSymbol})`, "giu");
	const splitContent = content.split(reg);

	return (
		<p className={cn(styleCss)}>
			{splitContent.map((splitItem, idx) => {
				const isMatch = idx % 2 === 1;
				if (isMatch) {
					return (
						<mark
							key={idx}
							className={cn(
								"inline-flex items-center",
								"body04 text-primary-red",
								"bg-sub-pink border-primary-red rounded-2 border",
								"px-[0.4rem]",
								highlightClass(splitContent, idx),
							)}
						>
							{splitItem}
						</mark>
					);
				}
				return <span key={idx}>{splitItem}</span>;
			})}
		</p>
	);
};

export { SearchHighlight };
