import React from 'react';

export default class Product extends React.Component {
	render() {
		return (
      <li className="collection-item">
        {this.props.product.name + " " + this.props.product.release_date}
      </li>
		);
	}
}

