import React from 'react';
import Product from './Product.jsx';

export default class ProductList extends React.Component {
	render() {
		return (
			<div>
        {this.props.products.map(function(product,i) {
          return <Product key={product.name} product={product} />
        },this)}
			</div>
		);
	}
}

