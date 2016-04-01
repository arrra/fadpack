require("./node_modules/materialize-css/dist/css/materialize.min.css")
import React from 'react';
import ReactDOM from 'react-dom';
import ProductList from './ProductList';

var mockData = {
	"products":[
		{
			"name":"oculus rift",
			"release_date":"2016-03-28T12:00.000z"
		},
		{
			"name":"htc vive",
			"release_date":"2016-04-05T12:00.000z"
		},
		{
			"name":"sony playstation vr",
			"release_date":"2016-10-01T12:00.000z"
		}
	]
}

export class App extends React.Component {
	render() {
		return (
      <div>
				<ProductList products={mockData.products}/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));

