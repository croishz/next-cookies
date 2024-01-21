/** @format */
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, HTMLAttributes, useState } from "react";

type ComboboxItemType = {
	id: string | number;
	value: string;
	name: string;
};

export default function Combobox<T extends ComboboxItemType>({
	id,
	name,
	label,
	array,
	init_value,
	...props
}: {
	id: string;
	name: string;
	label: string;
	array: T[];
	init_value: string | number;
} & HTMLAttributes<HTMLDivElement>) {
	const router = useRouter();
	const pathname = usePathname();
	const query = useSearchParams();
	const [selected, setSelected] = useState(init_value);
	const [applied, setApplied] = useState(selected !== "none");
	console.log("rendering... combobox");
	console.table({ selected, init_value, query: query.get("selected") });
	return (
		<div {...props}>
			<label htmlFor={id}>{label}</label>
			<select
				value={selected}
				// defaultValue={query.get("selected") || undefined}
				style={{ color: "#333", padding: "5px 10px", backgroundColor: applied ? "lightgreen" : "white" }}
				name={name}
				id={id}
				onChange={(e: ChangeEvent<HTMLSelectElement>) => {
					e.preventDefault();
					console.log(e.target);
					setSelected(e.target.value);
					setApplied(e.target.value !== "none");
					router.push(pathname + "?" + `selected=${(e.target as HTMLSelectElement).value}`);
				}}
			>
				<option value="none">All</option>
				{array.map((item) => (
					<option key={item.id} value={item.value}>
						{item.name}
					</option>
				))}
			</select>
		</div>
	);
}
