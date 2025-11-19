import IconChat from "@/assets/icons/icon_chat.svg?react";
import IconUser from "@/assets/icons/icon_user.svg?react";
import { cn } from "@/utils/cn";

const UserButtonGroup = () => {
	return (
		<div className={cn("flex gap-[0.5rem]")}>
			<button
				className={cn(
					"w-[4.2rem]",
					"h-[4.2rem]",
					"flex items-center justify-center",
					"rounded-[12px] border border-gray-400",
				)}
			>
				<IconChat className={cn("w-[2.7rem]", "h-[2.7rem]")} />
			</button>
			<button
				className={cn(
					"w-[4.2rem]",
					"h-[4.2rem]",
					"flex items-center justify-center",
					"rounded-[12px] border border-gray-400",
				)}
			>
				<IconUser className={cn("w-[2.7rem]", "mr-[1px] h-[2.7rem]")} />
			</button>
		</div>
	);
};

export { UserButtonGroup };
