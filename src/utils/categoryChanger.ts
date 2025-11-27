import type { CategoryCode } from "@/constants/category";
import type { CategoryLabel } from "@/constants/category";
import { LABEL_TO_CODE } from "@/constants/category";

const categoryKorToEng = (label: string): CategoryCode => {
	const code = LABEL_TO_CODE[label as CategoryLabel];
	return code ?? "ALL";
};

const categoryEngToKor = (code: string): CategoryLabel => {
	const entry = Object.entries(LABEL_TO_CODE).find(([, value]) => value === code);
	return (entry ? (entry[0] as CategoryLabel) : LABEL_TO_CODE["전체"]) as CategoryLabel;
};
export { categoryKorToEng, categoryEngToKor };
