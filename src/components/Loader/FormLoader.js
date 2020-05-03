import React, { Fragment } from "react";

function FormLoader(props) {
	const { formBars } = props;
	return (
		<div className="card">
			<div className="card-body">
				{formBars &&
					formBars.map((_, index) => (
						<Fragment key={index}>
							<div
								style={{ maxWidth: "40px", borderRadius: "4px" }}
								className="notice--loading__bar infiniteLinearAnimated mb-2"
							/>
							<div
								style={{ height: "30px" }}
								className="notice--loading__bar infiniteLinearAnimated mb-3"
							/>
						</Fragment>
					))}
			</div>
		</div>
	);
}

export default FormLoader;
