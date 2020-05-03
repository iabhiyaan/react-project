import React from "react";
import "./Skeleton.scss";

function Skeleton({ marginTop, loadingImage, num }) {
	const totalLines = num || 4;
	// making an array whose length equals to totalLines.
	const linesArray = Array.from({ length: parseInt(totalLines) });
	const loadingBar = linesArray.map((_, i) => (
		<div key={i} style={loadingImage && { "grid-column-start": "2" }} className="notice--loading__bar" />
	));
	const sayhello = () => <h3>Hello</h3>;
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
