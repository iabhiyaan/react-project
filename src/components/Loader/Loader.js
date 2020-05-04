import React from "react";

import TableLoader from "./TableLoader";
import FormLoader from "./FormLoader";
import "./Loader.scss";

function Loader(props) {
	const { table, tableBarCounts, mode, barCounts, forms, formBarCounts } = props;

	const totalBars = (counts) => {
		return Array.from({ length: counts || 4 });
	};

	const bars = totalBars(barCounts);
	const tableBars = totalBars(tableBarCounts);
	const formBars = totalBars(formBarCounts);

	if (table) {
		return <TableLoader tableBars={tableBars} mode={mode} />;
	} else if (forms) {
		return <FormLoader formBars={formBars} />;
	}

	return (
		<div className="card">
			<div className="card-body">
				{bars &&
					bars.map((_, index) => (
						<div key={index} className="notice--loading__bar infiniteLinearAnimated mb-2" />
					))}
			</div>
		</div>
	);
}

export default Loader;
