import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

export default class Product extends React.Component {
	render() {
		return (
      <li className="collection-item">
        <Link
          to="/products/:id">
          {this.props.product.name + " " + this.props.product.release_date}
        </Link>
      </li>
		);
	}
}

