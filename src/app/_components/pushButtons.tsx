/** @format */
"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";
import { array } from "../data";

const buttonStyle = {
	cursor: "pointer",
	backgroundColor: "lightgreen",
	color: "white",
	padding: "10px 20px",
	borderRadius: "5px",
	margin: "10px 0",
};

const wrapStyle = {
	display: "flex",
	columnGap: "20px",
	fontSize: "1rem",
	padding: "10px",
};

export default function PushButtons() {
	const router = useRouter();
	const pathname = usePathname();
	const query = useSearchParams();
	const onClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log(e.target);
		router.push(pathname + "?" + `selected=${(e.target as HTMLButtonElement).dataset.value}`);
	};
	console.log("rendering... push button");

	return (
		<div style={wrapStyle}>
			{array.map((item) => (
				<button
					type="button"
					key={item.id}
					style={buttonStyle}
					data-value={item.value}
					onClick={onClick}
					disabled={query.get("selected") === item.value}
				>
					{item.name}
				</button>
			))}
		</div>
	);
}
