import React from "react";

import TableLoader from "./TableLoader";
import "./Loader.scss";

function Loader(props) {
	const { table, tableNums, darkMode, barCount } = props;

	const animatedBarCount = tableNums || 4;
	const animatedBars = Array.from({ length: animatedBarCount });

	const simpleBars = barCount || 4;
	const bars = Array.from({ length: simpleBars });

	if (table) {
		return <TableLoader animatedBars={animatedBars} darkMode={darkMode} />;
	}

	return (
		<div className="card">
			<div className="card-body">
				{bars && bars.map((_) => <div className="notice--loading__bar infiniteLinearAnimated mb-2" />)}
			</div>
		</div>
	);
}

export default Loader;
