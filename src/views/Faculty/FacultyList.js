import React, { Component } from "react";
import { Card, CardBody, Button, Table } from "reactstrap";

import Modals from "../../components/Modals/Modals";

class FacultyList extends Component {
	state = {
		isEdit: false,
		modal: false,
		currentFaculty: null,
		datas: [
			{
				F_ID: 6,
				F_Name: "BBS"
			},
			{
				F_ID: 8,
				F_Name: "BCA"
			},
			{
				F_ID: 9,
				F_Name: "BSW"
			},
			{
				F_ID: 10,
				F_Name: "BSc. CSIT"
			}
		]
	};

	toggleModal = (data) => {
		this.setState((prevState) => {
			return {
				...prevState,
				modal: !prevState.modal,
				currentFaculty: data
			};
		});
	};

	handleDelete = (id) => {
		// eslint-disable-next-line no-restricted-globals
		const success = confirm("Are you want to delete this ?");
		if (success) {
			// API call to delete
			console.log(`Data deleted with ${id}`);
		}
	};

	render() {
		const { datas } = this.state;
		return (
			<Card>
				<CardBody>
					<Table>
						<thead>
							<tr>
								<th>SN</th>
								<th>Faculty Name</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{datas &&
								datas.map((data, key) => {
									return (
										<tr key={key}>
											<td>{++key}</td>
											<td>{data.F_Name}</td>
											<td>
												<Button onClick={() => this.toggleModal(data)} color="primary">
													Edit
												</Button>{" "}
												<Button onClick={() => this.handleDelete(data.F_ID)} color="danger">
													Delete
												</Button>
											</td>
										</tr>
									);
								})}
						</tbody>
					</Table>
					<Modals
						currentFaculty={this.state.currentFaculty}
						handleClick={this.toggleModal}
						modal={this.state.modal}
					/>
				</CardBody>
			</Card>
		);
	}
}

export default FacultyList;
