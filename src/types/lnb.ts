export interface LnbProps {
	isOpen: boolean;
}

export interface LnbItemProps {
	title: string;
	hasBadge?: boolean;
	onClick?: () => void;
}

export interface BoardGroupsItemType {
	groupName: string;
	boards: string[];
}
