import React from "react";

import TableLoader from "./TableLoader";
import FormLoader from "./FormLoader";
import "./Loader.scss";

function Loader(props) {
	const { table, tableNums, darkMode, barCount, forms, formBarCounts } = props;

	const totalBars = (counts) => {
		return Array.from({ length: counts || 4 });
	};

	const bars = totalBars(barCount);

	const tableBars = totalBars(tableNums);
	const formBars = totalBars(formBarCounts);

	if (table) {
		return <TableLoader tableBars={tableBars} darkMode={darkMode} />;
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
