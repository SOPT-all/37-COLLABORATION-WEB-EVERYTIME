const truncateByLength = (text: string, maxLength: number) => {
	if (text.length <= maxLength) return text;
	return text.slice(0, maxLength) + "..."; // 최대 글자수 초과 시 말줄임표로 대체
};

export { truncateByLength };
