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
      name: "Brand",
      url: "/brand",
      icon: "fa fa-database",
      children: [
        {
          name: "Add Brand",
          url: "/brand/add-brand",
          icon: "fa fa-plus"
        },
        {
          name: "Brand List",
          url: "/brand/brand-list",
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
