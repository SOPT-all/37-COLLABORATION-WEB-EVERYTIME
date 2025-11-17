/**
 * 헤더 컴포넌트 구현 시, Lnb 컴포넌트 적용할 때 참고용으로 작성한 예시 코드입니다.
 */

import { cn } from "@/utils/cn";
import { BADGE_BOARDS, BOARD_LIST } from "@/constants/boardList";
import { LnbItem } from "./LnbItem";

import { useNavigate } from "react-router-dom";

interface LnbProps {
	isOpen: boolean;
	onClose?: () => void;
	badgeBoards?: string[];
}

const Lnb = ({ isOpen, onClose, badgeBoards = [...BADGE_BOARDS] }: LnbProps) => {
	// 파란 점(업데이트 뱃지)을 표시할 게시판 목록
	const navigate = useNavigate();
	const handleBoardClick = (boardName: string) => {
		navigate(`/board/${boardName}`);

		// Lnb 닫기 (선택)
		onClose?.();
	};

	// Lnb가 닫혀있으면 렌더링하지 않음
	if (!isOpen) return null;

	return (
		<nav className={cn("border-bottom-1 border-gray-300 bg-gray-200", "p-4")}>
			<div className="flex flex-col">
				{BOARD_LIST.map((board) => (
					<LnbItem
						key={board}
						title={board}
						hasBadge={badgeBoards.includes(board)}
						onClick={() => handleBoardClick(board)}
					/>
				))}
			</div>
		</nav>
	);
};

export { Lnb };
