import React from "react";

function TableLoader(props) {
	const { tableBars, mode } = props;
	return (
		<div className={`card ${mode === "dark" && "darkMode"}`}>
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
									{tableBars.map(
										(_, index) =>
											index === tableBars.length - 1 ? (
												<td key={index}>
													<div
														style={{ borderRadius: "2px" }}
														className="notice--loading__bar infiniteLinearAnimated mb-1 editAnimatedButton"
													/>
													<div
														style={{ borderRadius: "2px" }}
														className="notice--loading__bar infiniteLinearAnimated mb-1 deleteAnimatedButton"
													/>
												</td>
											) : (
												<td key={index}>
													<div className="notice--loading__bar infiniteLinearAnimated" />
												</td>
											)
									)}
								</tr>
							))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default TableLoader;
