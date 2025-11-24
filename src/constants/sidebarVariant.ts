export const SIDEBAR_VARIANT = {
	main: {
		showProfile: true,
		showMyHistory: true,
		showAds: true,
	},
	search: {
		showProfile: false,
		showMyHistory: false,
		showAds: false,
	},
} as const;

export type SidebarVariant = keyof typeof SIDEBAR_VARIANT;
