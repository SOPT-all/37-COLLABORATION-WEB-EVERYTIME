import type { CategoryCode } from "@/constants/filterCategory";
import type { CategoryLabel } from "@/constants/filterCategory";
import { LABEL_TO_CODE } from "@/constants/filterCategory";

const changeLabelToCode = (label: string): CategoryCode => {
	const code = LABEL_TO_CODE[label as CategoryLabel];
	return code ?? "ALL";
};

const changeCodeToLabel = (code: string): CategoryLabel => {
	const entry = Object.entries(LABEL_TO_CODE).find(([, value]) => value === code);
	return (entry ? (entry[0] as CategoryLabel) : LABEL_TO_CODE["전체"]) as CategoryLabel;
};
export { changeLabelToCode, changeCodeToLabel };
