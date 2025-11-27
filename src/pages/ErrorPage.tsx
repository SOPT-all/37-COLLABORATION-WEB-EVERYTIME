import { useNavigate } from "react-router-dom";

import logoImg from "@/assets/images/logo.svg";
import { Header } from "@/components/common/header/Header";
import { cn } from "@/utils/cn";

const ErrorPage = () => {
	const navigate = useNavigate();

	const handleGoToMain = () => {
		navigate("/");
	};

	return (
		<div className={cn("flex h-[100vh] w-[100%] items-center justify-center")}>
			<Header />
			<section className={cn("flex flex-col items-center justify-center gap-[3.6rem]")}>
				<div className={cn("flex items-center justify-center gap-[2.2rem]")}>
					<img src={logoImg} alt="로고 이미지" aria-hidden="true" className={cn("w-[3.8rem] gap-[2.2rem]")} />
					<p className={cn("label01")}>요청하신 페이지에 오류가 발생했어요.</p>
				</div>
				<button type="button" onClick={handleGoToMain} className={cn("title06 bg-black text-white", "p-[1.2rem]")}>
					메인 페이지로 이동
				</button>
			</section>
		</div>
	);
};

export { ErrorPage };
