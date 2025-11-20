export interface ParseDateType {
	year: number;
	shortYear: string;
	month: string;
	day: string;
	hour: string;
	min: string;
}

/**
 * 날짜 문자열(예: "2025-11-15T15:10:00")을
 * "MM/DD HH:mm" 형식으로 변환하는 함수
 */
const formatDateWithTime = (createdAt: string): string => {
	if (!createdAt) return "";

	const { month, day, hour, min } = parseDate(createdAt);

	return `${month}/${day} ${hour}:${min}`;
};

/** 날짜 문자열(예: "2025-11-15T15:10:00")을
 * 1시간 미만: N분 전
 * 1시간~올해: MM/DD HH:MM
 * 작년: YY/MM/DD HH:MM
 * 형식으로 변환하는 함수
 * */
const formatDateForList = (createdAt: string): string => {
	if (!createdAt) return "";

	const now = new Date();
	const created = new Date(createdAt);

	const diffMs = now.getTime() - created.getTime();
	const diffMin = Math.floor(diffMs / 1000 / 60);

	const nowYear = now.getFullYear();
	const { year, shortYear, month, day, hour, min } = parseDate(createdAt);

	if (diffMin < 1) return "방금 전";
	if (diffMin < 60) return `${diffMin}분 전`;
	if (diffMin >= 60 && nowYear === year) return `${month}/${day} ${hour}:${min}`;
	return `${shortYear}/${month}/${day} ${hour}:${min}`;
};

const monthDay = (createdAt: string): string => {
	if (!createdAt) return "";

	const { month, day } = parseDate(createdAt);

	return `${month}/${day}`;
};

const parseDate = (dateString: string): ParseDateType => {
	const date = new Date(dateString);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	const hour = String(date.getHours()).padStart(2, "0");
	const min = String(date.getMinutes()).padStart(2, "0");

	return {
		year,
		shortYear: String(year).slice(-2),
		month,
		day,
		hour,
		min,
	};
};

export { formatDateWithTime, formatDateForList, monthDay };
