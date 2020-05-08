import React, { Component } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";

import Modals from "../../components/Modals/Modals";

class FacultyList extends Component {
	state = {
		isEdit: false,
		modal: false,
		currentFaculty: null
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

	render() {
		const data = [
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
		];
		const columns = [
			{
				name: "Title",
				selector: "F_Name"
			},
			{
				name: "Action",
				cell: (d) => (
					<button className="btn btn-success" onClick={() => this.toggleModal(d)}>
						Edit
					</button>
				)
			}
		];

		const tableData = {
			columns,
			data
		};

		return (
			<div className="card">
				<div className="card-body">
					<DataTableExtensions {...tableData} export={false} print={false}>
						<DataTable
							columns={columns}
							data={data}
							noHeader
							defaultSortField="id"
							defaultSortAsc={false}
							pagination
							highlightOnHover
						/>
					</DataTableExtensions>
					<Modals
						currentFaculty={this.state.currentFaculty}
						handleClick={this.toggleModal}
						modal={this.state.modal}
					/>
				</div>
			</div>
		);
	}
}

export default FacultyList;
