import React from 'react';
import Product from './Product.jsx';
import $ from 'jquery';


export default class ProductList extends React.Component {
	render() {
		return (
			<div>
        <h2>Products</h2>
        <ul className="collection">
          {this.props.products.map(function(product,i) {
            return <Product key={product.name} product={product} index={i} />
          },this)}
        </ul>
			</div>
		);
	}
}

