export interface LnbProps {
	isOpen: boolean;
	onClose?: () => void;
	badgeBoards?: string[];
}

export interface LnbItemProps {
	title: string;
	hasBadge?: boolean;
	onClick?: () => void;
}
