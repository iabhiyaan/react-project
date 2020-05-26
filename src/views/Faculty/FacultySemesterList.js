import React, { Component } from "react";
import { Card, CardBody, Button, Table } from "reactstrap";

import Modals from "../../components/Modals/ModalFSY";

class FacultySemesterList extends Component {
	state = {
		isEdit: false,
		modal: false,
		currentFacultyYear: null,
		datas: [
			{
				FS_ID: 1,
				FS_Name: "First",
				FY_ID: 1,
				FY_Name: "I"
			},
			{
				FS_ID: 2,
				FS_Name: "Second",
				FY_ID: 1,
				FY_Name: "I"
			},
			{
				FS_ID: 3,
				FS_Name: "Third",
				FY_ID: 2,
				FY_Name: "II"
			},
			{
				FS_ID: 4,
				FS_Name: "Fourth",
				FY_ID: 2,
				FY_Name: "II"
			},
			{
				FS_ID: 5,
				FS_Name: "Fifth",
				FY_ID: 3,
				FY_Name: "III"
			},
			{
				FS_ID: 6,
				FS_Name: "Sixth",
				FY_ID: 3,
				FY_Name: "III"
			},
			{
				FS_ID: 7,
				FS_Name: "Seventh",
				FY_ID: 4,
				FY_Name: "IV"
			},
			{
				FS_ID: 8,
				FS_Name: "Eighth",
				FY_ID: 4,
				FY_Name: "IV"
			}
		]
	};

	toggleModal = (data) => {
		this.setState((prevState) => {
			return {
				...prevState,
				modal: !prevState.modal,
				currentFacultyYear: data
			};
		});
	};

	handleDelete = (id) => {
		// eslint-disable-next-line no-restricted-globals
		const success = confirm("Are you want to delete this ?");
		if (success) {
			// API call to delete
			console.log(`Data deleted of id ${id}`);
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
								<th>Faculty Year</th>
								<th>Faculty Semester</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{datas &&
								datas.map((data, key) => {
									return (
										<tr key={key}>
											<td>{++key}</td>
											<td>{data.FY_Name}</td>
											<td>{data.FS_Name}</td>
											<td>
												<Button onClick={() => this.toggleModal(data)} color="primary">
													Edit
												</Button>{" "}
												<Button onClick={() => this.handleDelete(data.FS_ID)} color="danger">
													Delete
												</Button>
											</td>
										</tr>
									);
								})}
						</tbody>
					</Table>
					<Modals
						currentFacultyYear={this.state.currentFacultyYear}
						handleClick={this.toggleModal}
						modal={this.state.modal}
					/>
				</CardBody>
			</Card>
		);
	}
}

export default FacultySemesterList;
