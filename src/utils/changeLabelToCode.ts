import type { CategoryCode } from "@/constants/filterCategory";
import type { CategoryLabel } from "@/constants/filterCategory";
import { LABEL_TO_CODE } from "@/constants/filterCategory";

const changeLabelToCode = (label: string): CategoryCode => {
	const code = LABEL_TO_CODE[label as CategoryLabel];
	return code ?? "ALL";
};

export { changeLabelToCode };
