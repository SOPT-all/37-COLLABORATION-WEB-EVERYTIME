interface splitIntoTwoLinesType {
	firstLine: string;
	secondLine: string;
}

const FIRST_LINE_LIMIT = 55;

const splitIntoTwoLines = (text: string): splitIntoTwoLinesType => {
	const words = text.split(" ");
	let firstLine = "";
	let secondLine = "";

	for (const word of words) {
		if ((firstLine + word).length <= FIRST_LINE_LIMIT) {
			firstLine += (firstLine ? " " : "") + word;
		} else {
			secondLine += (secondLine ? " " : "") + word;
		}
	}
	return { firstLine, secondLine };
};

const highlightClass = (splitContent: Array<string>, idx: number): string => {
	const isFirstMatch = splitContent[0] === "";
	const isLastMatch = splitContent[splitContent.length - 1] === "";

	if (idx === 1 && isFirstMatch) return "mr-[0.2rem]";
	if (idx === splitContent.length - 2 && isLastMatch) return "ml-[0.2rem]";
	return "mx-[0.2rem]";
};

export { splitIntoTwoLines, highlightClass };
