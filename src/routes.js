import React from "react";
import AddModel from "./views/Model/AddModel";
import ModelList from "./views/Model/ModelList";
const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Users = React.lazy(() => import("./views/Users/Users"));
const User = React.lazy(() => import("./views/Users/User"));
const AddFaculty = React.lazy(() => import("./views/Faculty/AddFaculty"));
const FacultyList = React.lazy(() => import("./views/Faculty/FacultyList"));
const ProductList = React.lazy(() => import("./views/Faculty/ProductList"));
const FacultySemesterList = React.lazy(() => import("./views/Faculty/FacultySemesterList"));
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
	{ path: "/", exact: true, name: "Home" },
	{ path: "/dashboard", name: "Dashboard", component: Dashboard },
	{ path: "/faculty/add-faculty", name: "Add Faculty", component: AddFaculty },
	{ path: "/faculty/faculty-list", name: "Faculty List", component: FacultyList },
	{ path: "/faculty/faculty-semester-list", name: "Faculty Semester List", component: FacultySemesterList },
	{ path: "/product/product-list", name: "Product List", component: ProductList },
	{ path: "/model/add-model", name: "Add Model", component: AddModel },
	{ path: "/model/model-list", name: "Model List", component: ModelList },
	{ path: "/users", exact: true, name: "Users", component: Users },
	{ path: "/users/:id", exact: true, name: "User Details", component: User }
];

export default routes;
