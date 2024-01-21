/** @format */

import Combobox from "../_components/combobox";
import PushButtons from "../_components/pushButtons";
import { array } from "../data";

const wrapStyle = {
	display: "flex",
	columnGap: "20px",
	fontSize: "1rem",
	padding: "10px",
};

export const fetchCache = "default-no-store";
export const revaldate = 0;
export const dynamic = "force-dynamic";
export default function SelectedPage({
	searchParams,
}: {
	searchParams: {
		[key: string]: string | undefined;
	};
}) {
	const selected = searchParams.selected || 1;

	return (
		<div>
			<Combobox style={wrapStyle} id="test" name="test" label="test" init_value={selected} array={array} />
			<hr />
			<PushButtons />
		</div>
	);
}
