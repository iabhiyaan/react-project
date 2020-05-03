import React from "react";

const TableLoader = (props) => {
	const { tableBars, darkMode } = props;
	return (
		<div className="card" style={darkMode && { backgroundColor: "#23282c" }}>
			<div className="card-body">
				<table className="table">
					<thead>
						<tr>
							{tableBars &&
								tableBars.map((_, index) => (
									<th key={index} scope="col">
										<div className="notice--loading__bar infiniteLinearAnimated" />
									</th>
								))}
						</tr>
					</thead>
					<tbody>
						{tableBars &&
							tableBars.map((_, index) => (
								<tr key={index}>
									{tableBars.map((_, index) => (
										<td key={index}>
											<div className="notice--loading__bar infiniteLinearAnimated" />
										</td>
									))}
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableLoader;
