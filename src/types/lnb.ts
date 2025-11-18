export interface LnbProps {
	isOpen: boolean;
	badgeBoards?: string[];
}

export interface LnbItemProps {
	title: string;
	hasBadge?: boolean;
	onClick?: () => void;
}
