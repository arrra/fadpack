require("./node_modules/materialize-css/dist/css/materialize.min.css")
require("./node_modules/materialize-css/dist/js/materialize.js");
import React from 'react';
import { render } from 'react-dom'
import ReactDOM from 'react-dom';
import ProductList from './ProductList';
import ContentForm from './ContentForm';
import Product from './Product';
import { Router, Route, Link, hashHistory } from 'react-router'

const productsUrl = 'http://localhost:3000/products';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount () {
    this._loadProductsFromServer();
  }

	render() {
		return (
      <div>
				<ProductList products={this.state.products}/>
        <ContentForm />
			</div>
		);
	}

  _handleAddedProduct () {
    this._loadProductsFromServer();
  }

  _loadProductsFromServer () {
    $.getJSON(productsUrl, (data) => {
      this.setState({
        products: data.products
      });
    });
  }

}
render((
	<Router history={hashHistory}>
		<Route path="/" component={App}/>
		<Route path="products/:id" component={ProductPage}/> 
	</Router>
), document.querySelector("#myApp"))


