/**
 * 날짜 문자열(예: "2025-11-15T15:10:00")을
 * "MM/DD HH:mm" 형식으로 변환하는 함수
 */
const formatDateWithTime = (isoString: string): string => {
	if (!isoString) return "";

	const date = new Date(isoString);

	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	const hour = String(date.getHours()).padStart(2, "0");
	const min = String(date.getMinutes()).padStart(2, "0");

	return `${month}/${day} ${hour}:${min}`;
};

export { formatDateWithTime };
