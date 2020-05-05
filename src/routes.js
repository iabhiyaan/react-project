import React from "react";
import AddModel from "./views/Model/AddModel";
import ModelList from "./views/Model/ModelList";
const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Users = React.lazy(() => import("./views/Users/Users"));
const User = React.lazy(() => import("./views/Users/User"));
const AddBrand = React.lazy(() => import("./views/Brand/AddBrand"));
const BrandList = React.lazy(() => import("./views/Brand/BrandList"));
const ProductList = React.lazy(() => import("./views/Brand/ProductList"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
	{ path: "/", exact: true, name: "Home" },
	{ path: "/dashboard", name: "Dashboard", component: Dashboard },
	{ path: "/brand/add-brand", name: "Add Brand", component: AddBrand },
	{ path: "/brand/brand-list", name: "Brand List", component: BrandList },
	{ path: "/product/product-list", name: "Product List", component: ProductList },
	{ path: "/model/add-model", name: "Add Model", component: AddModel },
	{ path: "/model/model-list", name: "Model List", component: ModelList },
	{ path: "/users", exact: true, name: "Users", component: Users },
	{ path: "/users/:id", exact: true, name: "User Details", component: User }
];

export default routes;
