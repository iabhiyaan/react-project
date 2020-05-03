import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import Loader from "../../components/Loader/Loader";

class Dashboard extends Component {
	loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;
	render() {
		return (
			<div className="animated fadeIn">
				<Row>
					<Col xs="12" sm="6" lg="3">
						<Loader forms />
					</Col>
				</Row>
			</div>
		);
	}
}

export default Dashboard;
