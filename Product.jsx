import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import ProductPage from './ProductPage';

export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this._handleProduct = this._handleProduct.bind(this);
  }

	render() {
		return (
      <div>
        <li className="collection-item">
          <Link
            onClick={this._handleProduct}
            to={"/products/" + this.props.product._id}>
            {this.props.product.name + " " + this.props.product.release_date}
          </Link>
        </li>
      </div>
		);
	}

  _handleProduct() {
    console.log('product clicked: ',this.props.product)
  }
}

