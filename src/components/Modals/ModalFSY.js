import React, { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function Modals(props) {
	const { className, modal, handleClick, currentFacultyYear } = props;
	const [ FY_Name, setFY_Name ] = useState("");
	const [ FS_Name, setFS_Name ] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();

		// API Call to edit the name

		setFY_Name("");
		setFS_Name("");
		handleClick();
	};
	useEffect(
		() => {
			if (currentFacultyYear) {
				setFY_Name(currentFacultyYear.FY_Name);
				setFS_Name(currentFacultyYear.FS_Name);
			}
		},
		[ currentFacultyYear ]
	);

	return (
		<Modal isOpen={modal} toggle={handleClick} className={className}>
			<ModalBody>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label>Faculty Year</label>
						<input
							className="form-control"
							type="text"
							name="FY_Name"
							value={FY_Name}
							onChange={(e) => setFY_Name(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Faculty Semester</label>
						<input
							className="form-control"
							type="text"
							name="FS_Name"
							value={FS_Name}
							onChange={(e) => setFS_Name(e.target.value)}
						/>
					</div>
				</form>
			</ModalBody>
			<ModalFooter>
				<Button color="primary" onClick={handleSubmit}>
					Submit
				</Button>
				<Button color="secondary" onClick={handleClick}>
					Cancel
				</Button>
			</ModalFooter>
		</Modal>
	);
}

export default Modals;
