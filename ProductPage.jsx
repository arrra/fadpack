import React from 'react';
import Product from './Product'

export default class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'' 
    }
  }

  componentDidMount () {
    this._loadProductFromServer();
  }

  render() {
    return (
      <div>
        {this.state.name}
      </div>
    )
  }

  _loadProductFromServer() {
    const id = this.props.params.id;
    const productUrl = 'http://localhost:3000/products/' + id;
    $.getJSON(productUrl, (product) => {
      this.setState({
        name: product[0].name
      });
    });
  }


}
