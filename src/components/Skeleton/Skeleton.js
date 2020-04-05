import React from "react";
import "./Skeleton.scss";
function Skeleton({ marginTop, loadingImage, num }) {
	const loadingBar = [ ...Array(parseInt(num)) ].map((_, i) => (
		<div key={i} style={loadingImage && { "grid-column-start": "2" }} className="notice--loading__bar" />
	));

	return (
		<ul className="notice-list mx-auto" style={{ marginTop }}>
			<li className="notice--loading" style={loadingImage && { "grid-template-columns": "70px 1fr" }}>
				<div className="notice--loading__header">
					{loadingImage && <div className="notice--loading__img" />}
				</div>
				{loadingBar}
			</li>
		</ul>
	);
}

export default Skeleton;
