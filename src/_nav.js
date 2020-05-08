export default {
	items: [
		{
			name: "Dashboard",
			url: "/dashboard",
			icon: "icon-speedometer",
			badge: {
				variant: "info"
			}
		},
		{
			title: true,
			name: "Management",
			wrapper: {
				element: "",
				attributes: {}
			}
		},
		{
			name: "Faculty",
			url: "/faculty",
			icon: "fa fa-database",
			children: [
				{
					name: "Add Faculty",
					url: "/faculty/add-faculty",
					icon: "fa fa-plus"
				},
				{
					name: "Faculty List",
					url: "/faculty/faculty-list",
					icon: "fa fa-list"
				},
				{
					name: "Product List",
					url: "/product/product-list",
					icon: "fa fa-list"
				}
			]
		},
		{
			name: "Model",
			url: "/model",
			icon: "fa fa-motorcycle",
			children: [
				{
					name: "Add Model",
					url: "/model/add-model",
					icon: "fa fa-plus"
				},
				{
					name: "Model List",
					url: "/model/model-list",
					icon: "fa fa-list"
				}
			]
		}
	]
};
