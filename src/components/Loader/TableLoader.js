import React from "react";

const TableLoader = (props) => {
	const { animatedBars, darkMode } = props;
	return (
		<div className="card" style={darkMode && { backgroundColor: "#23282c" }}>
			<div className="card-body">
				<table className="table">
					<thead>
						<tr>
							{animatedBars &&
								animatedBars.map((_) => (
									<th scope="col">
										<div className="notice--loading__bar infiniteLinearAnimated" />
									</th>
								))}
						</tr>
					</thead>
					<tbody>
						{animatedBars &&
							animatedBars.map((_) => (
								<tr>
									{animatedBars.map((_) => (
										<td>
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
