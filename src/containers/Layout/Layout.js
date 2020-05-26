import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";

import {
	AppAside,
	AppFooter,
	AppHeader,
	AppSidebar,
	AppSidebarFooter,
	AppSidebarForm,
	AppSidebarHeader,
	AppSidebarMinimizer,
	AppBreadcrumb2 as AppBreadcrumb,
	AppSidebarNav2 as AppSidebarNav
} from "@coreui/react";

// sidebar nav config
import navigation from "../../_nav";
// routes config
import routes from "../../routes";

const Footer = React.lazy(() => import("./Footer"));
const Header = React.lazy(() => import("./Header"));
const Skeleton = React.lazy(() => import("../../components/Skeleton/Skeleton"));

// actions

class Layout extends Component {
	loading = () => <Skeleton num="4" />;

	signOut(e) {
		e.preventDefault();
		this.props.history.push("/login");
	}

	render() {
		return (
			<div className="app">
				<AppHeader fixed>
					<Suspense fallback={this.loading()}>
						<Header onLogout={(e) => this.signOut(e)} />
					</Suspense>
				</AppHeader>
				<div className="app-body">
					<AppSidebar fixed display="lg">
						<AppSidebarHeader />
						<AppSidebarForm />
						<Suspense>
							<AppSidebarNav navConfig={navigation} {...this.props} router={router} />
						</Suspense>
						<AppSidebarFooter />
						<AppSidebarMinimizer />
					</AppSidebar>
					<main className="main">
						<AppBreadcrumb appRoutes={routes} router={router} />
						<Container fluid>
							<Suspense fallback={this.loading()}>
								{/* content goes here */}
								<Switch>
									{routes.map((route, idx) => {
										return route.component ? (
											<Route
												key={idx}
												path={route.path}
												exact={route.exact}
												name={route.name}
												render={(props) =>
													localStorage.getItem("authToken") !== null ? (
														<route.component {...props} />
													) : (
														<Redirect to={{ pathname: "/login" }} />
													)}
											/>
										) : null;
									})}
									<Redirect from="/" to="/dashboard" />
								</Switch>
							</Suspense>
						</Container>
					</main>
				</div>
				<AppFooter>
					<Footer />
				</AppFooter>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		teacher: state.teacher
	};
}

export default Layout;
