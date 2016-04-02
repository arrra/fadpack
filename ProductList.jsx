import React from 'react';
import Product from './Product.jsx';
import $ from 'jquery';

const productsUrl = 'http://localhost:3000/products';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products
    };
  }

  componentDidMount() {
    $.getJSON(productsUrl, (data) => {
      this.setState({
        products: data.products
      });
    });
  }

	render() {
		return (
			<div>
        <h2>Products</h2>
        <ul className="collection">
          {this.state.products.map(function(product,i) {
            return <Product key={product.name} product={product} />
          },this)}
        </ul>
			</div>
		);
	}
}

