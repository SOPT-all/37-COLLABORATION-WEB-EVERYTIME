/**
 * 날짜 문자열(예: "2025-11-15T15:10:00")을
 * "MM/DD HH:mm" 형식으로 변환하는 함수
 */
const formatDateWithTime = (createdAt: string): string => {
	if (!createdAt) return "";

	const date = new Date(createdAt);

	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	const hour = String(date.getHours()).padStart(2, "0");
	const min = String(date.getMinutes()).padStart(2, "0");

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
	const year = created.getFullYear();

	const shortYear = String(year).slice(-2);
	const month = String(created.getMonth() + 1).padStart(2, "0");
	const day = String(created.getDate()).padStart(2, "0");
	const hour = String(created.getHours()).padStart(2, "0");
	const min = String(created.getMinutes()).padStart(2, "0");

	if (diffMin < 1) return "방금 전";
	else if (diffMin < 60) return `${diffMin}분 전`;
	else if (diffMin >= 60 && nowYear === year) return `${month}/${day} ${hour}:${min}`;
	return `${shortYear}/${month}/${day} ${hour}:${min}`;
};

export { formatDateWithTime, formatDateForList };
