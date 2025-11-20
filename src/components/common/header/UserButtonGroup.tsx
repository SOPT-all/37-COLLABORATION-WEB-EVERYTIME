import IconChat from "@/assets/icons/icon_chat.svg?react";
import IconUser from "@/assets/icons/icon_user.svg?react";
import { cn } from "@/utils/cn";

const IconButton = ({ children }: { children: React.ReactNode }) => (
	<button
		type="button"
		className={cn("h-[4.2rem] w-[4.2rem]", "flex items-center justify-center", "rounded-[12px] border border-gray-400")}
	>
		{children}
	</button>
);

const UserButtonGroup = () => {
	return (
		<div className="flex gap-[0.5rem]">
			<IconButton>
				<IconChat className="h-[2.7rem] w-[2.7rem]" />
			</IconButton>

			<IconButton>
				<IconUser className="mr-[1px] h-[2.7rem] w-[2.7rem]" />
			</IconButton>
		</div>
	);
};

export { UserButtonGroup };
