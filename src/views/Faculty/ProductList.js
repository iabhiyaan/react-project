import React from "react";

import InlineSearch from "../../components/InlineSearch/InlineSearch";
import DTables from "../../components/DTables/DTables";

class Products extends React.Component {
	state = {
		filterText: "",
		products: [
			{
				id: 1,
				category: "Sporting Goods",
				price: "49.99",
				qty: 12,
				name: "football"
			},
			{
				id: 2,
				category: "Sporting Goods",
				price: "9.99",
				qty: 15,
				name: "baseball"
			},
			{
				id: 3,
				category: "Sporting Goods",
				price: "29.99",
				qty: 14,
				name: "basketball"
			},
			{
				id: 4,
				category: "Electronics",
				price: "99.99",
				qty: 34,
				name: "iPod Touch"
			},
			{
				id: 5,
				category: "Electronics",
				price: "399.99",
				qty: 12,
				name: "iPhone 5"
			},
			{
				id: 6,
				category: "Electronics",
				price: "199.99",
				qty: 23,
				name: "nexus 7"
			}
		]
	};

	handleUserInput = (filterText) => {
		this.setState({ filterText: filterText });
	};

	filterProducts = (filterText) => {
		const products = this.state.products.filter((product) => {
			const regex = new RegExp(`${filterText}`, "gi");
			return product.name.match(regex) || product.price.match(regex);
		});
		this.setState({
			products
		});
	};

	render() {
		const { filterText, products } = this.state;
		return (
			<div>
				<InlineSearch filterText={filterText} onUserInput={this.handleUserInput} />
				<DTables products={products} filterText={filterText} />
			</div>
		);
	}
}

export default Products;
