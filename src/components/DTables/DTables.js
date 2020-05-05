import React, { Fragment } from "react";
import { Table } from "reactstrap";
import { Card, CardBody } from "reactstrap";

function DTables({ filterText, products }) {
	const datas =
		products &&
		products.map((product) => {
			if (product.name.indexOf(filterText) === -1) {
				return;
			} else {
				return (
					<tr key={product.id}>
						<td>{product.name}</td>
						<td>{product.price}</td>
						<td>{product.qty}</td>
						<td>{product.category}</td>
						<td>
							<a href="#" className="btn btn-primary btn-block mb-3">
								Edit
							</a>
							<a href="#" className="btn btn-block btn-danger">
								Delete
							</a>
						</td>
					</tr>
				);
			}
		});
	return (
		<Fragment>
			<Card>
				<CardBody>
					<Table>
						<thead>
							<tr>
								<th>Name</th>
								<th>Price</th>
								<th>Quantity</th>
								<th>Category</th>
								<th>Actions</th>
							</tr>
						</thead>

						<tbody>{datas}</tbody>
					</Table>
				</CardBody>
			</Card>
		</Fragment>
	);
}

export default DTables;
