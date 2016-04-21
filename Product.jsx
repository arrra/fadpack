import React from 'react';
import { Link } from 'react-router';

export default class Product extends React.Component {
	render() {
		return (
      <li className="collection-item">
        <Link
          to={"/products/" + this.props.product._id}>
          {this.props.product.name + " " + this.props.product.release_date}
        </Link>
      </li>
		);
	}
}

