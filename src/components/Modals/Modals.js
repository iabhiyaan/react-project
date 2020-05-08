import React, { useState, useEffect } from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function Modals(props) {
	const { className, modal, handleClick, currentFaculty } = props;
	const [ F_Name, setF_Name ] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();

		// API Call to edit the name

		setF_Name("");
		handleClick();
	};
	useEffect(
		() => {
			if (currentFaculty) {
				setF_Name(currentFaculty.F_Name);
			}
		},
		[ currentFaculty ]
	);

	return (
		<Modal isOpen={modal} toggle={handleClick} className={className}>
			<ModalBody>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Faculty Name</label>
						<input
							className="form-control"
							type="text"
							name="F_Name"
							value={F_Name}
							onChange={(e) => setF_Name(e.target.value)}
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
