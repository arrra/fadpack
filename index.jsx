require("./node_modules/materialize-css/dist/css/materialize.min.css")
import React from 'react';
import ReactDOM from 'react-dom';

export class App extends React.Component {
	render() {
		return (
			<div>Simple React + Babel + Webpack</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector("#myApp"));
