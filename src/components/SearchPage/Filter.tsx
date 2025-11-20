import { useEffect, useRef, useState } from "react";

import ArrowDownIcon from "@/assets/icons/icon_down.svg";
import ArrowUpIcon from "@/assets/icons/icon_up.svg";
import { FILTER_CATEGORY } from "@/constants/filterCategory";
import { cn } from "@/utils/cn";

interface FilterProps {
	selectedCategory: string;
	onSelect: (category: string) => void;
}

export interface FilterOptionProps {
	id: number;
	name: string;
}

const Filter = ({ selectedCategory, onSelect }: FilterProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const wrapperRef = useRef<HTMLDivElement | null>(null);

	const currentItem = FILTER_CATEGORY.find((item) => item.name === selectedCategory) ?? FILTER_CATEGORY[0];

	const handleToggle = () => {
		setIsOpen((prev) => !prev);
	};

	const handleSelect = (category: string) => {
		onSelect(category);
		setIsOpen(false);
	};

	// 외부영역 클릭 시 드롭다운 닫힘
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div ref={wrapperRef} className="relative inline-block">
			{/* 드롭다운 닫힘 상태 (state=default) */}
			<button
				type="button"
				onClick={handleToggle}
				className={cn(
					"flex items-center justify-between",
					"h-[4rem] w-[17.4rem]",
					"py-[0.2rem] pr-[0.6rem] pl-[1.2rem]",
					"border border-[var(--color-gray-400)]",
					"bg-[var(--color-white)]",
					"body05 text-[var(--color-gray-700)]",
				)}
			>
				<span>{currentItem.name}</span>
				<img src={isOpen ? ArrowUpIcon : ArrowDownIcon} alt="옵션 토글" className="h-[1.8rem] w-[1.8rem] shrink-0" />
			</button>

			{/* 드롭다운 펼침 상태 (state=selected) */}
			{isOpen && (
				<div
					className={cn(
						"absolute top-full left-0 z-10",
						"w-[17.4rem]",
						"border border-t-0 border-[var(--color-gray-400)]",
						"bg-[var(--color-white)]",
						"flex h-[14rem] flex-col overflow-y-auto",
						"filter-scroll",
					)}
				>
					{FILTER_CATEGORY.map((item) => {
						const isSelected = item.name === currentItem.name;

						return (
							<button
								key={item.id}
								type="button"
								onClick={() => handleSelect(item.name)}
								className={cn(
									"flex items-center",
									"h-[4rem] w-full",
									"px-[1.2rem]",
									"gap-[1rem]",
									"body05 text-left text-[var(--color-gray-700)]",
									"hover:bg-[var(--color-gray-200)]",
									isSelected && "bg-[var(--color-gray-400)]",
									"shrink-0 self-stretch",
								)}
							>
								{item.name}
							</button>
						);
					})}
				</div>
			)}
		</div>
	);
};

export { Filter };
