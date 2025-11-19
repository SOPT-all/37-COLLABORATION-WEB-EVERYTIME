import defaultProfile from "@/assets/images/default_profile.svg";
import type { ProfileItemProps } from "@/types/profile";
import { cn } from "@/utils/cn";

const ProfileItem = ({ nickname, name, userId, profileImage = defaultProfile }: ProfileItemProps) => {
	const handleMyInfoClick = () => {
		console.log("내 정보 클릭");
	};

	const handleLogoutClick = () => {
		console.log("로그아웃 클릭");
	};

	return (
		<section
			className={cn(
				"flex flex-col items-center justify-center",
				"h-[23.2rem] w-[28rem]",
				"gap-[1.2rem]",
				"border border-gray-300",
				"bg-gray-100",
			)}
		>
			<img
				src={profileImage}
				alt="프로필 이미지"
				className={cn("h-[6rem] w-[6rem]", "flex-shrink-0", "aspect-square", "object-cover")}
			/>

			<button onClick={handleMyInfoClick} className={cn("text-center")}>
				<p className={cn("title02", "text-gray-800", "mb-[0.4rem]")}>{nickname}</p>
				<p className={cn("caption05", "text-gray-500")}>{name}</p>
				<p className={cn("caption05", "text-gray-500")}>{userId}</p>
			</button>

			<div className={cn("flex items-center gap-[0.4rem]")}>
				<button
					onClick={handleMyInfoClick}
					className={cn(
						"body06",
						"flex items-center justify-center",
						"h-[2.6rem] w-[6.8rem]",
						"rounded-4",
						"border border-gray-300",
						"text-gray-600",
					)}
				>
					내 정보
				</button>
				<button
					onClick={handleLogoutClick}
					className={cn(
						"body06",
						"flex items-center justify-center",
						"h-[2.6rem] w-[6.8rem]",
						"rounded-4",
						"border border-gray-300",
						"text-gray-600",
					)}
				>
					로그아웃
				</button>
			</div>
		</section>
	);
};

export { ProfileItem };
