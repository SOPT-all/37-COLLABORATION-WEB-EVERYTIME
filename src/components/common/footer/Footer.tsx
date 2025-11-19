import DividerIcon from "@/assets/icons/footer_divider.svg";
import { FOOTER_LINKS } from "@/constants/footerLinks";
import { cn } from "@/utils/cn";

const Footer = () => {
	return (
		<footer
			className={cn(
				"w-full bg-[var(--color-gray-100)]",
				"flex flex-col items-start",
				"pt-[4.1rem] pb-[5.5rem] pl-[12.6rem]",
				"text-[var(--color-gray-600)]",
			)}
		>
			<div className="flex flex-col gap-[0.6rem]">
				<p className="body03">비누랩스 주식회사</p>

				<div className="flex flex-wrap items-center gap-[0.6rem]">
					<p className="caption01">서울특별시 마포구 양화로 113, 5층</p>
					<img src={DividerIcon} alt="구분선" className="h-[1rem]" />

					<p className="caption01">사업자등록번호 : 407-88-00024</p>
					<img src={DividerIcon} alt="구분선" className="h-[1rem]" />

					<p className="caption01">직업정보제공사업 신고번호 : J120402023000</p>
				</div>
			</div>

			<div className="mt-[1.7rem] flex flex-wrap items-center gap-[0.8rem]">
				{FOOTER_LINKS.map((item, i) => (
					<div key={item.label} className="flex items-center gap-[0.8rem]">
						<button type="button" className={item.className}>
							{item.label}
						</button>
						{i !== FOOTER_LINKS.length - 1 && <img src={DividerIcon} alt="구분선" className="h-[1rem]" />}
					</div>
				))}
			</div>
		</footer>
	);
};

export default Footer;
